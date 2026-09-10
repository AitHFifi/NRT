"use client";

import React, { useState } from "react";
import SmoothScrollHero from "@/components/SmoothScrollHero";
import BookingWidget from "@/components/Booking/BookingWidget";
import GabonRouteMap from "@/components/Map/GabonRouteMap";
import FleetShowcase from "@/components/Fleet/FleetShowcase";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* 1. Cinematic Pinned Hero Experience (Transparent backdrop so sky and clouds shine through) */}
      <SmoothScrollHero />

      {/* 2. Main content sections with smooth dark background scrolling over the hero */}
      <div className="relative z-30 bg-[#070b0e] border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        {/* Dual-Mode Booking Engine */}
        <BookingWidget preselectedRoute={selectedRoute} />

        {/* Interactive Gabon Route Map */}
        <GabonRouteMap onSelectRoute={handleSelectRoute} />

        {/* Domestic Aircraft Fleet Showcase */}
        <FleetShowcase />

        {/* Regional Footer */}
        <Footer />
      </div>
    </div>
  );
}
