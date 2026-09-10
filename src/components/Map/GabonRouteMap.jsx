"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/data/destinations";
import geoData from "@/data/gabonGeoData.json";
import {
  Plane,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Navigation,
  Compass,
  Tag,
  Radio,
  ExternalLink,
} from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const GabonRouteMap = ({ onSelectRoute }) => {
  const { t, lang, formatPrice } = useLanguageCurrency();
  const [selectedCity, setSelectedCity] = useState(destinations[1]); // Default: Port-Gentil
  const [hoveredProvince, setHoveredProvince] = useState(null);

  const hub = destinations[0]; // Libreville (LBV)

  // Quick lookup for destination in a province
  const provinceDestMap = useMemo(() => {
    const map = {};
    destinations.forEach((d) => {
      if (d.provinceId) {
        if (!map[d.provinceId]) map[d.provinceId] = [];
        map[d.provinceId].push(d);
      }
    });
    return map;
  }, []);

  const handleCityClick = (dest) => {
    setSelectedCity(dest);
  };

  const handleProvinceClick = (provinceId) => {
    const matching = provinceDestMap[provinceId];
    if (matching && matching.length > 0) {
      setSelectedCity(matching[0]);
    }
  };

  const handleBooking = (dest) => {
    if (onSelectRoute) {
      onSelectRoute({
        origin: "LBV",
        destination: dest.code === "LBV" ? "POG" : dest.code,
      });
    }
  };

  return (
    <section id="network" className="relative w-full py-24 px-4 sm:px-8 lg:px-16 z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Radio size={13} className="animate-pulse text-[#D4AF37]" />
            <span>{t("map.badge") || "Réseau National & Régional"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {t("map.title") || "Explorez nos Destinations au Gabon"}
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            {t("map.subtitle") ||
              "Un maillage aérien d'excellence reliant la capitale Libreville aux pôles pétroliers, miniers et écotouristiques des 9 provinces gabonaises."}
          </p>
        </div>

        {/* Main Grid: Authentic Geographic Map + Luxury Travel Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#080d14]/90 border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl">
          {/* LEFT COLUMN: Authentic Aeronautical Map of Gabon */}
          <div className="lg:col-span-7 flex flex-col justify-between relative bg-[#0a121c]/90 rounded-2xl border border-white/10 p-4 sm:p-6 overflow-hidden shadow-inner">
            {/* Top Telemetry Overlay */}
            <div className="flex items-center justify-between z-10 text-[10px] sm:text-[11px] font-mono text-white/50 border-b border-white/10 pb-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-emerald-400 font-bold">RADAR ATC LIBREVILLE</span>
                <span className="text-white/30">|</span>
                <span className="hidden sm:inline">FIR FOOO / 124.3 MHz</span>
              </div>
              <div className="text-right text-[#D4AF37]/90 font-medium">
                ROUTE ACTIVE :{" "}
                <span className="text-white font-bold">
                  LBV ➔ {selectedCity.code}
                </span>{" "}
                ({selectedCity.flightDurationFromLBV})
              </div>
            </div>

            {/* SVG Map Canvas Container */}
            <div className="relative w-full aspect-[500/540] flex items-center justify-center my-auto">
              {/* Aeronautical Radar Concentric Circles centered around Libreville (93.2, 185.1) */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 18.6% 33%, rgba(212,175,55,0.25) 0, transparent 40%), radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "100% 100%, 28px 28px",
                }}
              />

              <svg
                viewBox={geoData.viewBox}
                className="w-full h-full drop-shadow-2xl select-none"
                style={{ overflow: "visible" }}
              >
                <defs>
                  {/* Glowing neon filters */}
                  <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glowSubtle" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Concentric Radar Range Rings from Libreville Hub */}
                <circle
                  cx={hub.svgCoords.x}
                  cy={hub.svgCoords.y}
                  r="85"
                  fill="none"
                  stroke="rgba(212,175,55,0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />
                <circle
                  cx={hub.svgCoords.x}
                  cy={hub.svgCoords.y}
                  r="175"
                  fill="none"
                  stroke="rgba(212,175,55,0.08)"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />
                <circle
                  cx={hub.svgCoords.x}
                  cy={hub.svgCoords.y}
                  r="270"
                  fill="none"
                  stroke="rgba(212,175,55,0.06)"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />

                {/* Real Gabon National Contour Glow Shadow */}
                <path
                  d={geoData.nationalPath}
                  fill="#070d14"
                  stroke="rgba(212, 175, 55, 0.35)"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  className="transition-all duration-500"
                />

                {/* Real Gabon 9 Administrative Provinces */}
                {geoData.provinces.map((prov) => {
                  const isSelected = selectedCity.provinceId === prov.id;
                  const isHovered = hoveredProvince === prov.id;

                  return (
                    <path
                      key={prov.id}
                      d={prov.path}
                      fill={
                        isSelected
                          ? "rgba(212, 175, 55, 0.22)"
                          : isHovered
                          ? "rgba(255, 255, 255, 0.12)"
                          : "#0d1724"
                      }
                      stroke={
                        isSelected
                          ? "#D4AF37"
                          : isHovered
                          ? "rgba(255, 255, 255, 0.5)"
                          : "#1a2c42"
                      }
                      strokeWidth={isSelected ? "2" : "1"}
                      strokeLinejoin="round"
                      onMouseEnter={() => setHoveredProvince(prov.id)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      onClick={() => handleProvinceClick(prov.id)}
                      className="cursor-pointer transition-colors duration-300"
                    >
                      <title>{prov.name}</title>
                    </path>
                  );
                })}

                {/* Ocean Coastline Waterline Accents on Atlantic (West) */}
                <path
                  d="M40 270 Q45 285 53 300 T75 335 T100 380 T150 440 T210 510"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.15)"
                  strokeWidth="2"
                  strokeDasharray="2 6"
                />

                {/* Domestic Flight Corridors Arcs from Libreville Hub */}
                {destinations
                  .filter((d) => !d.isHub)
                  .map((dest) => {
                    const isSelected = selectedCity.code === dest.code;

                    // Compute curved quadratic Bézier arc
                    const midX = (hub.svgCoords.x + dest.svgCoords.x) / 2;
                    const midY = (hub.svgCoords.y + dest.svgCoords.y) / 2;
                    const dx = dest.svgCoords.x - hub.svgCoords.x;
                    const dy = dest.svgCoords.y - hub.svgCoords.y;

                    // Perpendicular offset for curved aeronautical airway look
                    const curvatureFactor = 0.12;
                    const ctrlX = Math.round(midX - dy * curvatureFactor);
                    const ctrlY = Math.round(midY + dx * curvatureFactor - 12);
                    const pathD = `M ${hub.svgCoords.x} ${hub.svgCoords.y} Q ${ctrlX} ${ctrlY} ${dest.svgCoords.x} ${dest.svgCoords.y}`;

                    return (
                      <g key={`route-${dest.code}`}>
                        {/* Underline halo for active route */}
                        {isSelected && (
                          <path
                            d={pathD}
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="5"
                            strokeOpacity="0.25"
                            filter="url(#glowGold)"
                          />
                        )}

                        {/* Main Flight Path Arc */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.2)"}
                          strokeWidth={isSelected ? "2.5" : "1.2"}
                          strokeDasharray={isSelected ? "none" : "3 4"}
                          strokeOpacity={isSelected ? 1 : 0.45}
                          className="transition-all duration-300"
                        />

                        {/* Moving Flight Indicator along trajectory */}
                        <circle
                          r={isSelected ? "3.5" : "2"}
                          fill={isSelected ? "#ffffff" : "#D4AF37"}
                          filter={isSelected ? "url(#glowGold)" : undefined}
                        >
                          <animateMotion
                            path={pathD}
                            dur={isSelected ? "3.2s" : "7s"}
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Animated Jet Silhouette along selected route */}
                        {isSelected && (
                          <g>
                            <animateMotion
                              path={pathD}
                              dur="3.2s"
                              repeatCount="indefinite"
                              rotate="auto"
                            />
                            {/* Directional Airplane glyph */}
                            <path
                              d="M 5,0 L -5,-3.5 L -3,0 L -5,3.5 Z"
                              fill="#ffffff"
                              stroke="#D4AF37"
                              strokeWidth="0.8"
                              transform="scale(1.2)"
                            />
                          </g>
                        )}
                      </g>
                    );
                  })}

                {/* Airport Waypoint Nodes */}
                {destinations.map((dest) => {
                  const isHub = dest.isHub;
                  const isSelected = selectedCity.code === dest.code;
                  const coords = dest.svgCoords;
                  const label = dest.labelPos || { dx: 0, dy: 14, textAnchor: "middle" };

                  return (
                    <g
                      key={dest.code}
                      onClick={() => handleCityClick(dest)}
                      className="cursor-pointer group"
                    >
                      {/* Hub Beacon Outer Radar Waves */}
                      {isHub && (
                        <>
                          <circle
                            cx={coords.x}
                            cy={coords.y}
                            r="16"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="1.2"
                            opacity="0.6"
                            className="animate-ping"
                            style={{ animationDuration: "2.8s" }}
                          />
                          <circle
                            cx={coords.x}
                            cy={coords.y}
                            r="9"
                            fill="rgba(212,175,55,0.2)"
                          />
                        </>
                      )}

                      {/* Selected City Pulse Ring */}
                      {!isHub && isSelected && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="13"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          opacity="0.75"
                          className="animate-ping"
                          style={{ animationDuration: "2.2s" }}
                        />
                      )}

                      {/* Airport Node Circle */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isHub ? "7" : isSelected ? "6" : "4.5"}
                        fill={isHub ? "#D4AF37" : isSelected ? "#ffffff" : "#7c8ba1"}
                        stroke="#070c12"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Airport Label */}
                      <g transform={`translate(${coords.x + label.dx}, ${coords.y + label.dy})`}>
                        {/* Text Background Box for extreme legibility */}
                        <rect
                          x={label.textAnchor === "end" ? -74 : label.textAnchor === "start" ? -2 : -38}
                          y="-9"
                          width={label.textAnchor === "middle" ? 76 : 76}
                          height="14"
                          rx="3"
                          fill="rgba(7, 12, 18, 0.85)"
                          stroke={isSelected ? "rgba(212, 175, 55, 0.5)" : "rgba(255, 255, 255, 0.1)"}
                          strokeWidth="0.8"
                        />
                        <text
                          x="0"
                          y="1.5"
                          textAnchor={label.textAnchor}
                          fill={isHub ? "#D4AF37" : isSelected ? "#ffffff" : "rgba(255,255,255,0.8)"}
                          fontSize={isHub ? "9.5" : "8.5"}
                          fontWeight={isSelected || isHub ? "bold" : "normal"}
                          className="font-mono tracking-tight select-none pointer-events-none"
                        >
                          {dest.city} ({dest.code})
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom HUD Legend & Scale Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] text-white/60 pt-3 border-t border-white/10 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-2 ring-[#D4AF37]/30" />
                  <span className="text-white/80 font-medium">Hub Libreville (LBV)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white ring-1 ring-white/40" />
                  <span>Escales Régionales</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="w-4 h-[2px] bg-[#D4AF37]" />
                  <span>Couloir Actif</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/40 font-mono text-[9px]">
                <Compass size={12} className="text-[#D4AF37]" />
                <span>CARTE VECTORIELLE OFFICIELLE DU GABON</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Upgraded Luxury Travel Destination Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.code}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#0e1622] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Visual Header with Destination Photo Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedCity.imageUrl}
                    alt={selectedCity.city}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays for High-Contrast Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1622] via-[#0e1622]/40 to-black/50" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin size={10} />
                      Province de la {selectedCity.province}
                    </span>
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {selectedCity.code} • {selectedCity.icao}
                    </span>
                  </div>

                  {/* City Name & Airport on the Photo */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {selectedCity.city}
                    </h3>
                    <p className="text-xs text-white/70 font-mono mt-0.5 flex items-center gap-1.5 drop-shadow">
                      <Plane size={12} className="text-[#D4AF37]" />
                      <span>{selectedCity.airportName}</span>
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
                  {/* Flight Telemetry Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-black/30 border border-white/5 font-mono">
                    {/* Flight Duration */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-white/40 uppercase block flex items-center gap-1">
                        <Clock size={11} className="text-[#D4AF37]" />
                        Durée vol (LBV)
                      </span>
                      <span className="text-sm font-bold text-white">
                        {selectedCity.flightDurationFromLBV}
                      </span>
                    </div>

                    {/* Daily Frequency */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-white/40 uppercase block flex items-center gap-1">
                        <Plane size={11} className="text-[#D4AF37]" />
                        Fréquence
                      </span>
                      <span className="text-sm font-bold text-white">
                        {selectedCity.dailyDepartures} vols / jour
                      </span>
                    </div>

                    {/* Starting Fare */}
                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <span className="text-[10px] text-white/40 uppercase block flex items-center gap-1">
                        <Tag size={11} className="text-[#D4AF37]" />
                        Tarif régulier
                      </span>
                      <span className="text-sm font-bold text-[#D4AF37]">
                        {selectedCity.startingFareXAF > 0
                          ? `Dès ${formatPrice(selectedCity.startingFareXAF)}`
                          : "Hub de transit"}
                      </span>
                    </div>

                    {/* Assigned Aircraft */}
                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <span className="text-[10px] text-white/40 uppercase block flex items-center gap-1">
                        <ShieldCheck size={11} className="text-[#D4AF37]" />
                        Appareil
                      </span>
                      <span className="text-xs font-semibold text-white/90 truncate block">
                        {selectedCity.aircraftModel}
                      </span>
                    </div>
                  </div>

                  {/* Next Departure Status */}
                  <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-300 font-medium">
                        Prochain vol régulier :
                      </span>
                    </div>
                    <span className="font-mono font-bold text-white">
                      {selectedCity.nextDeparture}
                    </span>
                  </div>

                  {/* Destination Description */}
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {lang === "en"
                      ? selectedCity.descriptionEn
                      : selectedCity.description}
                  </p>

                  {/* Key Economic & Tourism Highlights */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider block">
                      {t("map.keyIndustries") || "Pôles économiques & attraits"} :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(lang === "en"
                        ? selectedCity.highlightsEn
                        : selectedCity.highlights
                      ).map((h) => (
                        <span
                          key={h}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleBooking(selectedCity)}
                      className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#e8c866] hover:from-[#c29f2e] hover:to-[#dfbe59] text-black font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <span>
                        {selectedCity.code === "LBV"
                          ? "Rechercher des vols depuis Libreville"
                          : `Réserver Libreville ➔ ${selectedCity.city}`}
                      </span>
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Destination Switcher Pills Bar */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <span className="text-[10px] font-mono text-white/40 uppercase block mb-2">
                Sélection rapide des escales :
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                {destinations.map((d) => {
                  const isCur = d.code === selectedCity.code;
                  return (
                    <button
                      key={d.code}
                      onClick={() => handleCityClick(d)}
                      className={`py-1.5 px-1 rounded-lg text-center font-mono text-[10px] font-bold transition-all cursor-pointer ${
                        isCur
                          ? "bg-[#D4AF37] text-black shadow-md scale-105"
                          : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
                      }`}
                    >
                      {d.code}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabonRouteMap;

