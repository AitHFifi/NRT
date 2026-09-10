"use client";

import React, { useState } from "react";
import {
  Plane,
  ArrowLeftRight,
  Calendar,
  Search,
  Check,
  Compass,
} from "lucide-react";
import { destinations, getDestinationByCode } from "@/data/destinations";
import { searchScheduledFlights } from "@/data/flights";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";
import FlightSearchResults from "./FlightSearchResults";

const BookingWidget = ({ preselectedRoute = null }) => {
  const { t } = useLanguageCurrency();
  const [tripType, setTripType] = useState("oneway"); // "oneway" | "roundtrip"
  const [originCode, setOriginCode] = useState("LBV");
  const [destinationCode, setDestinationCode] = useState("POG");
  const [departDate, setDepartDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 4);
    return nextWeek.toISOString().split("T")[0];
  });
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState("economy");

  // Search Results state
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Sync state during render when preselectedRoute prop changes
  const [prevRoute, setPrevRoute] = useState(null);
  if (preselectedRoute && preselectedRoute !== prevRoute) {
    setPrevRoute(preselectedRoute);
    if (preselectedRoute.origin) setOriginCode(preselectedRoute.origin);
    if (preselectedRoute.destination) setDestinationCode(preselectedRoute.destination);
    setHasSearched(true);
    setSearchResults(
      searchScheduledFlights(
        preselectedRoute.origin || "LBV",
        preselectedRoute.destination || "POG"
      )
    );
  }

  const handleSwap = () => {
    const temp = originCode;
    setOriginCode(destinationCode);
    setDestinationCode(temp);
    if (hasSearched) {
      const res = searchScheduledFlights(destinationCode, temp);
      setSearchResults(res);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const res = searchScheduledFlights(originCode, destinationCode);
    setSearchResults(res);
    setHasSearched(true);
  };

  const originDestination = getDestinationByCode(originCode);
  const destDestination = getDestinationByCode(destinationCode);

  return (
    <section id="booking" className="relative w-full py-20 px-4 sm:px-8 lg:px-16 z-30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/85 text-[11px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Plane size={13} className="text-[#D4AF37]" />
            <span>NRT Réservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white drop-shadow-md">
            {t("booking.title")}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto leading-relaxed">
            {t("booking.subtitle")}
          </p>
        </div>

        {/* Streamlined Luxury Booking Card */}
        <div className="bg-[#0b1118]/85 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">
          {/* Top Controls: Trip Type & Travel Class */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            {/* Trip Type Pills */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setTripType("oneway")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tripType === "oneway"
                    ? "bg-white text-black shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t("booking.oneWay")}
              </button>
              <button
                type="button"
                onClick={() => setTripType("roundtrip")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tripType === "roundtrip"
                    ? "bg-white text-black shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t("booking.roundTrip")}
              </button>
            </div>

            {/* Travel Class & Passengers */}
            <div className="flex items-center gap-2.5">
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-medium focus:outline-none focus:border-white/40 cursor-pointer"
              >
                <option value="economy" className="bg-[#0c1219] text-white">{t("booking.economy")}</option>
                <option value="business" className="bg-[#0c1219] text-white">{t("booking.business")}</option>
              </select>

              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white font-medium focus:outline-none focus:border-white/40 cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <option key={num} value={num} className="bg-[#0c1219] text-white">
                    {num} {num > 1 ? "passagers" : "passager"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Inputs Form */}
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
              {/* Origin Field */}
              <div className="lg:col-span-4 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-3.5 transition-colors focus-within:border-white/40">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                  {t("booking.origin")}
                </span>
                <div className="flex items-center justify-between">
                  <select
                    value={originCode}
                    onChange={(e) => setOriginCode(e.target.value)}
                    className="w-full bg-transparent text-sm sm:text-base font-bold text-white focus:outline-none cursor-pointer"
                  >
                    {destinations.map((d) => (
                      <option key={d.code} value={d.code} className="bg-[#0c1219] text-white">
                        {d.city} ({d.code}) - {d.province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="lg:col-span-1 flex justify-center -my-2 lg:my-0">
                <button
                  type="button"
                  onClick={handleSwap}
                  title="Inverser les villes"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-md"
                >
                  <ArrowLeftRight size={15} />
                </button>
              </div>

              {/* Destination Field */}
              <div className="lg:col-span-4 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-3.5 transition-colors focus-within:border-white/40">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                  {t("booking.destination")}
                </span>
                <div className="flex items-center justify-between">
                  <select
                    value={destinationCode}
                    onChange={(e) => setDestinationCode(e.target.value)}
                    className="w-full bg-transparent text-sm sm:text-base font-bold text-white focus:outline-none cursor-pointer"
                  >
                    {destinations.map((d) => (
                      <option key={d.code} value={d.code} className="bg-[#0c1219] text-white">
                        {d.city} ({d.code}) - {d.province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Departure Date */}
              <div className="lg:col-span-3 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-3.5 transition-colors focus-within:border-white/40">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                  {t("booking.departDate")}
                </span>
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Route Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-white/40">Liaisons fréquentes :</span>
              {[
                { label: "Libreville ⇄ Port-Gentil", from: "LBV", to: "POG" },
                { label: "Libreville ⇄ Franceville", from: "LBV", to: "MVB" },
                { label: "Libreville ⇄ Moanda", from: "LBV", to: "MFF" },
                { label: "Libreville ⇄ Oyem", from: "LBV", to: "OYE" },
              ].map((route) => (
                <button
                  key={route.label}
                  type="button"
                  onClick={() => {
                    setOriginCode(route.from);
                    setDestinationCode(route.to);
                    const res = searchScheduledFlights(route.from, route.to);
                    setSearchResults(res);
                    setHasSearched(true);
                  }}
                  className="bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1.5 rounded-full text-white/80 hover:text-white transition-all text-xs font-medium cursor-pointer"
                >
                  {route.label}
                </button>
              ))}
            </div>

            {/* Primary Action Button: Crisp Pure White matching the top hero */}
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90 py-4 px-6 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-2xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <Search size={16} />
              <span>{t("booking.searchFlights")}</span>
            </button>
          </form>

          {/* Search Results Area */}
          {hasSearched && (
            <div className="pt-6 border-t border-white/10">
              <FlightSearchResults
                flights={searchResults}
                origin={originDestination}
                destination={destDestination}
                date={departDate}
                passengers={passengers}
                selectedClass={cabinClass}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
