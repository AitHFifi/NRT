"use client";

import React, { useState } from "react";
import { scheduledFlights } from "@/data/flights";
import { destinations, getDestinationByCode } from "@/data/destinations";
import { Clock, Search, Plane, Radio, CheckCircle2 } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const FlightStatusTracker = () => {
  const { t, lang } = useLanguageCurrency();
  const [selectedHub, setSelectedHub] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFlights = scheduledFlights.filter((flight) => {
    // Filter by hub if not ALL
    if (selectedHub !== "ALL") {
      if (flight.origin !== selectedHub && flight.destination !== selectedHub) {
        return false;
      }
    }
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const origin = getDestinationByCode(flight.origin);
      const dest = getDestinationByCode(flight.destination);
      return (
        flight.flightNo.toLowerCase().includes(q) ||
        origin.city.toLowerCase().includes(q) ||
        dest.city.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getStatusBadge = (statusType, statusFr, statusEn) => {
    const text = lang === "en" ? statusEn : statusFr;
    switch (statusType) {
      case "ontime":
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {text}
          </span>
        );
      case "boarding":
        return (
          <span className="inline-flex items-center gap-1 bg-[#fcd116]/15 border border-[#fcd116]/30 text-[#fcd116] text-[10px] font-bold px-2.5 py-1 rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fcd116]" />
            {text}
          </span>
        );
      case "landed":
        return (
          <span className="inline-flex items-center gap-1 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
            <CheckCircle2 size={11} />
            {text}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 text-white/70 text-[10px] font-medium px-2.5 py-1 rounded-full">
            {text}
          </span>
        );
    }
  };

  return (
    <section id="status" className="relative w-full py-24 px-4 sm:px-8 lg:px-16 z-30">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/85 text-[11px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Radio size={13} className="text-[#D4AF37] animate-pulse" />
            <span>{t("status.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md">
            {t("status.title")}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            {t("status.subtitle")}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0b1118]/90 border border-white/15 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-xl">
          {/* Hub Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { label: "Tous les vols", code: "ALL" },
              { label: "Libreville (LBV)", code: "LBV" },
              { label: "Port-Gentil (POG)", code: "POG" },
              { label: "Franceville (MVB)", code: "MVB" },
            ].map((hub) => (
              <button
                key={hub.code}
                onClick={() => setSelectedHub(hub.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedHub === hub.code
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-[#131b26] text-white/70 hover:text-white"
                }`}
              >
                {hub.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              placeholder={t("status.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131b26] border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-white/40"
            />
          </div>
        </div>

        {/* Flight Status Table / Cards */}
        <div className="bg-[#0b1118]/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#101722] text-[10px] uppercase tracking-wider text-white/50">
                  <th className="py-3.5 px-5">{t("status.flight")}</th>
                  <th className="py-3.5 px-5">{t("status.from")}</th>
                  <th className="py-3.5 px-5">{t("status.to")}</th>
                  <th className="py-3.5 px-5">{t("status.scheduled")}</th>
                  <th className="py-3.5 px-5">Appareil</th>
                  <th className="py-3.5 px-5 text-right">{t("status.state")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-white/80">
                {filteredFlights.map((flight) => {
                  const origin = getDestinationByCode(flight.origin);
                  const dest = getDestinationByCode(flight.destination);

                  return (
                    <tr
                      key={flight.flightNo}
                      className="hover:bg-white/5 transition-colors"
                    >
                      {/* Flight Number */}
                      <td className="py-4 px-5 font-mono font-bold text-white flex items-center gap-2">
                        <Plane size={13} className="text-[#D4AF37]" />
                        <span>{flight.flightNo}</span>
                      </td>

                      {/* Origin */}
                      <td className="py-4 px-5">
                        <span className="font-semibold text-white">
                          {origin.city}
                        </span>
                        <span className="text-[10px] text-white/50 ml-1.5 font-mono">
                          ({origin.code})
                        </span>
                      </td>

                      {/* Destination */}
                      <td className="py-4 px-5">
                        <span className="font-semibold text-white">
                          {dest.city}
                        </span>
                        <span className="text-[10px] text-white/50 ml-1.5 font-mono">
                          ({dest.code})
                        </span>
                      </td>

                      {/* Departure / Duration */}
                      <td className="py-4 px-5">
                        <span className="font-mono text-[#D4AF37] font-bold">
                          {flight.departureTime}
                        </span>
                        <span className="text-[10px] text-white/50 ml-2">
                          ({flight.duration})
                        </span>
                      </td>

                      {/* Aircraft */}
                      <td className="py-4 px-5 text-white/70 text-[11px]">
                        {flight.aircraft}
                      </td>

                      {/* State Badge */}
                      <td className="py-4 px-5 text-right">
                        {getStatusBadge(
                          flight.statusType,
                          flight.status,
                          flight.statusEn
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightStatusTracker;
