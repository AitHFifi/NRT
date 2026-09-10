"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Info, Shield, Coffee, Armchair, Sparkles } from "lucide-react";

const AircraftSeatMap = ({ aircraft, lang }) => {
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const cfg = aircraft.seatMapConfig;

  // Generate rows structure depending on the aircraft
  const renderFuselageSeats = () => {
    if (aircraft.id === "king-air-350") {
      // VIP 9-Seat Executive Club Layout
      return (
        <div className="flex flex-col items-center gap-3 py-4 w-full max-w-sm mx-auto">
          {/* Cockpit divider */}
          <div className="w-full flex items-center justify-between px-6 text-[10px] font-mono text-white/40 border-b border-white/10 pb-2">
            <span>◄ COCKPIT</span>
            <span>SALON VIP ►</span>
          </div>

          {/* Club 4 Facing section */}
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
              <span>Club 4 Exécutif (Vis-à-Vis)</span>
              <span>Table Déployable</span>
            </div>

            {/* Row 1 & 2 facing with table in between */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <SeatButton
                  seatId="1A"
                  type="vip"
                  label="1A"
                  extra="Fauteuil cuir inclinable"
                  extraEn="Reclining leather armchair"
                  onHover={setHoveredSeat}
                />
                <SeatButton
                  seatId="2A"
                  type="vip"
                  label="2A"
                  extra="En vis-à-vis table"
                  extraEn="Facing table executive"
                  onHover={setHoveredSeat}
                />
              </div>

              {/* Central Table */}
              <div className="space-y-2">
                <SeatButton
                  seatId="1B"
                  type="vip"
                  label="1B"
                  extra="Fauteuil cuir inclinable"
                  extraEn="Reclining leather armchair"
                  onHover={setHoveredSeat}
                />
                <SeatButton
                  seatId="2B"
                  type="vip"
                  label="2B"
                  extra="En vis-à-vis table"
                  extraEn="Facing table executive"
                  onHover={setHoveredSeat}
                />
              </div>
            </div>

            {/* Folding Table Graphic Indicator */}
            <div className="h-6 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[10px] font-mono text-[#D4AF37]">
              ═══ Table de Réunion Bois Précieux ═══
            </div>

            {/* Row 3 & 4 Club section */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <SeatButton
                  seatId="3A"
                  type="vip"
                  label="3A"
                  extra="Hublot & repose-pieds"
                  extraEn="Window & leg rest"
                  onHover={setHoveredSeat}
                />
                <SeatButton
                  seatId="4A"
                  type="vip"
                  label="4A"
                  extra="Accès direct divan arrière"
                  extraEn="Direct divan access"
                  onHover={setHoveredSeat}
                />
              </div>
              <div className="space-y-2">
                <SeatButton
                  seatId="3B"
                  type="vip"
                  label="3B"
                  extra="Hublot & repose-pieds"
                  extraEn="Window & leg rest"
                  onHover={setHoveredSeat}
                />
                <SeatButton
                  seatId="4B"
                  type="vip"
                  label="4B"
                  extra="Proximité mini-bar"
                  extraEn="Near refreshment center"
                  onHover={setHoveredSeat}
                />
              </div>
            </div>

            {/* Divan Seat */}
            <div className="pt-2">
              <SeatButton
                seatId="5-DIVAN"
                type="vip"
                label="5 - Divan Exécutif VIP"
                extra="Banquette 2 places convertible repos"
                extraEn="2-place convertible rest divan"
                onHover={setHoveredSeat}
                fullWidth
              />
            </div>
          </div>

          {/* Aft Amenities */}
          <div className="w-full flex items-center justify-between px-6 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white/60">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Coffee size={13} className="text-[#D4AF37]" /> Mini-Bar Réfrigéré
            </span>
            <span className="text-[11px]">Toilettes Privatives Enclosed</span>
          </div>
        </div>
      );
    }

    if (aircraft.id === "erj-145") {
      // 1-2 Executive Regional Jet Layout
      // Show representative rows (1 to 10) to make it sleek, elegant, and legible
      const displayRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      return (
        <div className="w-full flex flex-col items-center gap-2 py-3">
          {/* Fuselage Header */}
          <div className="w-full max-w-md flex items-center justify-between text-[10px] font-mono text-white/50 px-4 border-b border-white/10 pb-1.5">
            <span>◄ COCKPIT</span>
            <span className="text-[#D4AF37]">COULOIR CENTRAL (1-2)</span>
            <span>ISSUE ARRIÈRE ►</span>
          </div>

          {/* Fuselage Container */}
          <div className="w-full max-w-md bg-[#080d14] border border-white/15 rounded-3xl p-4 shadow-inner">
            <div className="space-y-2">
              {displayRows.map((rowNum) => {
                const isExit = rowNum === 12;
                return (
                  <div
                    key={rowNum}
                    className={`flex items-center justify-between p-1 rounded-xl transition-colors ${
                      isExit ? "bg-amber-500/10 border border-amber-500/30" : ""
                    }`}
                  >
                    {/* Row Number */}
                    <span className="w-6 text-[10px] font-mono text-white/40 text-center font-bold">
                      {rowNum}
                    </span>

                    {/* Left Single Seat 'A' (The VIP Solo Seat) */}
                    <div className="flex items-center">
                      <SeatButton
                        seatId={`${rowNum}A`}
                        type={rowNum <= 3 ? "preferred" : "standard"}
                        label={`${rowNum}A`}
                        extra={
                          rowNum <= 3
                            ? "Siège Solo Affaires (Hublot + Couloir direct)"
                            : "Siège Solo (Sans voisin de rangée)"
                        }
                        extraEn={
                          rowNum <= 3
                            ? "Business Solo Seat (Window + Direct Aisle)"
                            : "Solo Seat (No adjacent seatmate)"
                        }
                        onHover={setHoveredSeat}
                      />
                    </div>

                    {/* Aisle Spacer */}
                    <div className="w-8 flex items-center justify-center text-[9px] font-mono text-white/20">
                      │
                    </div>

                    {/* Right Pair Seats 'B' and 'C' */}
                    <div className="flex items-center gap-1.5">
                      <SeatButton
                        seatId={`${rowNum}B`}
                        type={rowNum <= 3 ? "preferred" : "standard"}
                        label={`${rowNum}B`}
                        extra="Siège Couloir"
                        extraEn="Aisle Seat"
                        onHover={setHoveredSeat}
                      />
                      <SeatButton
                        seatId={`${rowNum}C`}
                        type={rowNum <= 3 ? "preferred" : "standard"}
                        label={`${rowNum}C`}
                        extra="Siège Hublot"
                        extraEn="Window Seat"
                        onHover={setHoveredSeat}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <span className="text-[10px] text-white/40 font-mono">
            {lang === "en"
              ? "Showing forward cabin section (50 total seats in 1-2 layout)"
              : "Section avant affichée (50 sièges au total en configuration 1-2)"}
          </span>
        </div>
      );
    }

    // Default: ATR 72-600 (2-2 Regional Layout)
    const displayRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
      <div className="w-full flex flex-col items-center gap-2 py-3">
        {/* Fuselage Header */}
        <div className="w-full max-w-md flex items-center justify-between text-[10px] font-mono text-white/50 px-4 border-b border-white/10 pb-1.5">
          <span>◄ COCKPIT AVIONIQUE</span>
          <span className="text-[#D4AF37]">CONFIGURATION 2-2 SANS SIÈGE DU MILIEU</span>
          <span>PORTE ARRIÈRE ►</span>
        </div>

        {/* Fuselage Container */}
        <div className="w-full max-w-md bg-[#080d14] border border-white/15 rounded-3xl p-4 shadow-inner">
          <div className="space-y-2">
            {displayRows.map((rowNum) => {
              const isExit = rowNum === 9 || rowNum === 10;
              return (
                <div
                  key={rowNum}
                  className={`flex items-center justify-between p-1 rounded-xl transition-colors ${
                    isExit ? "bg-amber-500/10 border border-amber-500/30" : ""
                  }`}
                >
                  {/* Row Number */}
                  <span className="w-6 text-[10px] font-mono text-white/40 text-center font-bold">
                    {rowNum}
                  </span>

                  {/* Left Pair 'A' and 'B' */}
                  <div className="flex items-center gap-1.5">
                    <SeatButton
                      seatId={`${rowNum}A`}
                      type={isExit ? "exit" : rowNum === 1 ? "preferred" : "standard"}
                      label={`${rowNum}A`}
                      extra={isExit ? "Issue d'urgence (Espace jambes XXL)" : "Siège Hublot"}
                      extraEn={isExit ? "Emergency exit (XXL legroom)" : "Window Seat"}
                      onHover={setHoveredSeat}
                    />
                    <SeatButton
                      seatId={`${rowNum}B`}
                      type={isExit ? "exit" : rowNum === 1 ? "preferred" : "standard"}
                      label={`${rowNum}B`}
                      extra={isExit ? "Issue d'urgence (Espace jambes XXL)" : "Siège Couloir"}
                      extraEn={isExit ? "Emergency exit (XXL legroom)" : "Aisle Seat"}
                      onHover={setHoveredSeat}
                    />
                  </div>

                  {/* Central Aisle */}
                  <div className="w-8 flex items-center justify-center text-[9px] font-mono text-white/20">
                    │
                  </div>

                  {/* Right Pair 'C' and 'D' */}
                  <div className="flex items-center gap-1.5">
                    <SeatButton
                      seatId={`${rowNum}C`}
                      type={isExit ? "exit" : rowNum === 1 ? "preferred" : "standard"}
                      label={`${rowNum}C`}
                      extra={isExit ? "Issue d'urgence (Espace jambes XXL)" : "Siège Couloir"}
                      extraEn={isExit ? "Emergency exit (XXL legroom)" : "Aisle Seat"}
                      onHover={setHoveredSeat}
                    />
                    <SeatButton
                      seatId={`${rowNum}D`}
                      type={isExit ? "exit" : rowNum === 1 ? "preferred" : "standard"}
                      label={`${rowNum}D`}
                      extra={isExit ? "Issue d'urgence (Espace jambes XXL)" : "Siège Hublot"}
                      extraEn={isExit ? "Emergency exit (XXL legroom)" : "Window Seat"}
                      onHover={setHoveredSeat}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className="text-[10px] text-white/40 font-mono">
          {lang === "en"
            ? "Showing forward cabin section (70 total seats in 2-2 layout)"
            : "Section avant affichée (70 sièges au total en configuration 2-2)"}
        </span>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0f16] border border-white/10 select-none p-4 sm:p-6">
      {/* Seatmap Header & Key Specs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Armchair size={16} className="text-[#D4AF37]" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "en" ? "Cabin Plan & Seating" : "Plan de Cabine & Sièges"}
            </h4>
          </div>
          <p className="text-xs text-white/60 mt-0.5">
            {cfg.layoutType} • {cfg.totalSeats} {lang === "en" ? "seats" : "sièges certifiés"}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-white/20 border border-white/30" />
            <span>Standard</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-[#D4AF37]/30 border border-[#D4AF37]" />
            <span>Privilège / Solo</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-amber-500/40 border border-amber-500" />
            <span>Issue XXL</span>
          </span>
        </div>
      </div>

      {/* Main Fuselage Scrollable Zone */}
      <div className="flex-1 overflow-y-auto max-h-[360px] sm:max-h-[400px] my-4 pr-1 scrollbar-thin scrollbar-thumb-white/10">
        {renderFuselageSeats()}
      </div>

      {/* Interactive Seat Inspector Footer */}
      <div className="p-3.5 bg-[#0d141e] border border-white/10 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-mono font-bold text-xs">
            {hoveredSeat ? hoveredSeat.label : "✈"}
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              {hoveredSeat
                ? `Siège ${hoveredSeat.label} • ${
                    lang === "en" ? hoveredSeat.extraEn : hoveredSeat.extra
                  }`
                : lang === "en"
                ? "Hover over any seat to inspect comfort"
                : "Survolez un siège pour afficher ses dimensions"}
            </div>
            <div className="text-[10px] text-white/50 font-mono">
              {lang === "en" ? "Seat Pitch:" : "Espacement jambes :"} {cfg.pitch} •{" "}
              {lang === "en" ? "Width:" : "Largeur :"} {cfg.width}
            </div>
          </div>
        </div>

        <div className="hidden sm:block text-right">
          <span className="text-[10px] font-mono uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
            {cfg.layoutType}
          </span>
        </div>
      </div>
    </div>
  );
};

// Seat Button Subcomponent
const SeatButton = ({ seatId, type = "standard", label, extra, extraEn, onHover, fullWidth = false }) => {
  let colorClass = "bg-white/10 border-white/20 text-white/80 hover:border-white hover:bg-white/20";
  if (type === "preferred") {
    colorClass =
      "bg-[#D4AF37]/15 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/30 hover:border-[#D4AF37]";
  } else if (type === "exit") {
    colorClass = "bg-amber-500/20 border-amber-500/60 text-amber-300 hover:bg-amber-500/30";
  } else if (type === "vip") {
    colorClass =
      "bg-gradient-to-r from-[#D4AF37]/25 to-amber-600/20 border-[#D4AF37]/60 text-white hover:border-[#D4AF37] hover:scale-[1.02]";
  }

  return (
    <button
      onMouseEnter={() => onHover({ seatId, label, extra, extraEn })}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover({ seatId, label, extra, extraEn })}
      className={`${
        fullWidth ? "w-full py-2.5" : "w-10 sm:w-11 h-9"
      } rounded-lg border text-[11px] font-mono font-bold flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default AircraftSeatMap;
