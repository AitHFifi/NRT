"use client";

import React, { useState } from "react";
import { Plane, Clock, Luggage, ArrowRight } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";
import BookingSummaryModal from "./BookingSummaryModal";

function createPNR(flightNo) {
  const suffix = (flightNo || "NRT").replace(/[^A-Z0-9]/g, "");
  return `NRT-${suffix}-7X`;
}

const FlightSearchResults = ({
  flights = [],
  origin,
  destination,
  date,
  passengers = 1,
  selectedClass = "economy",
}) => {
  const { t, formatPrice } = useLanguageCurrency();
  const [activeClass, setActiveClass] = useState(selectedClass);
  const [bookingData, setBookingData] = useState(null);
  const [passengerName] = useState("Voyageur NRT");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!origin || !destination) return null;

  const handleBook = (flight) => {
    const pnr = createPNR(flight.flightNo);

    setBookingData({
      flight,
      origin,
      destination,
      date: date || new Date().toISOString().split("T")[0],
      passengers,
      cabinClass: activeClass,
      passengerName,
      pnr,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Search Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
            <Plane size={17} />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <span>{origin.city}</span>
              <span className="text-white/40">→</span>
              <span>{destination.city}</span>
            </div>
            <p className="text-[11px] text-white/50">
              {date} • {passengers} {t("booking.passengers").toLowerCase()} •{" "}
              {flights.length} {t("booking.availableFlights").toLowerCase()}
            </p>
          </div>
        </div>

        {/* Cabin Class Switcher */}
        <div className="flex items-center bg-black/40 border border-white/10 p-1 rounded-xl text-xs self-start sm:self-auto">
          <button
            onClick={() => setActiveClass("economy")}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeClass === "economy"
                ? "bg-white text-black shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t("booking.economy")}
          </button>
          <button
            onClick={() => setActiveClass("business")}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeClass === "business"
                ? "bg-white text-black shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t("booking.business")}
          </button>
        </div>
      </div>

      {/* No Flights Fallback */}
      {flights.length === 0 && (
        <div className="text-center py-10 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2">
          <p className="text-sm text-white/80">{t("booking.noFlightsFound")}</p>
          <p className="text-xs text-white/45">
            Conseil : Essayez la liaison majeure Libreville (LBV) ⇄ Port-Gentil (POG) ou Franceville (MVB).
          </p>
        </div>
      )}

      {/* Flight Cards Grid */}
      <div className="space-y-3">
        {flights.map((flight) => {
          const unitPrice =
            activeClass === "business"
              ? flight.priceBusinessXAF
              : flight.priceEconomyXAF;
          const totalPrice = unitPrice * passengers;

          return (
            <div
              key={flight.flightNo}
              className="bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/25 rounded-2xl p-5 transition-all shadow-lg space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Flight Times & Duration */}
                <div className="flex items-center gap-4 sm:gap-8">
                  {/* Departure */}
                  <div>
                    <span className="text-2xl font-bold font-mono text-white">
                      {flight.departureTime}
                    </span>
                    <p className="text-xs font-semibold text-white/80">
                      {origin.code}
                    </p>
                    <p className="text-[10px] text-white/50">{origin.city}</p>
                  </div>

                  {/* Flight Vector Graphic */}
                  <div className="flex flex-col items-center px-2">
                    <span className="text-[10px] text-white/50 mb-1 flex items-center gap-1 font-mono">
                      <Clock size={11} />
                      {flight.duration}
                    </span>
                    <div className="flex items-center gap-1 w-24 sm:w-32">
                      <div className="h-[1.5px] w-full bg-gradient-to-r from-white/20 via-white/60 to-white/20" />
                      <Plane size={13} className="text-white rotate-90 shrink-0 opacity-80" />
                    </div>
                    <span className="text-[9px] text-white/60 font-semibold mt-1">
                      {t("booking.direct")}
                    </span>
                  </div>

                  {/* Arrival */}
                  <div>
                    <span className="text-2xl font-bold font-mono text-white">
                      {flight.arrivalTime}
                    </span>
                    <p className="text-xs font-semibold text-white/80">
                      {destination.code}
                    </p>
                    <p className="text-[10px] text-white/50">
                      {destination.city}
                    </p>
                  </div>
                </div>

                {/* Aircraft & Perks */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/70">
                  <span className="bg-white/10 border border-white/10 px-2.5 py-1 rounded-md text-white font-mono font-medium">
                    {flight.flightNo}
                  </span>
                  <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80">
                    {flight.aircraft}
                  </span>
                  <span className="flex items-center gap-1 text-white/60">
                    <Luggage size={12} className="text-[#D4AF37]" />
                    {activeClass === "business" ? "2x23kg" : "1x23kg"}
                  </span>
                </div>

                {/* Price & Booking Button */}
                <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                  <div className="text-left md:text-right">
                    <div className="text-xl font-bold font-mono text-white">
                      {formatPrice(totalPrice)}
                    </div>
                    <p className="text-[10px] text-white/50">
                      {formatPrice(unitPrice)} {t("booking.perPassenger")}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBook(flight)}
                    className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>{t("booking.selectFlight")}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Boarding Pass confirmation modal */}
      <BookingSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={bookingData}
      />
    </div>
  );
};

export default FlightSearchResults;
