"use client";

import React from "react";
import { Plane } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const FloatingButton = () => {
  const { lang } = useLanguageCurrency();

  return (
    <div className="w-full flex justify-center fixed bottom-6 sm:bottom-8 z-[100] pointer-events-none px-4">
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full pointer-events-auto shadow-2xl">
        <a
          href="#booking"
          className="text-[10px] sm:text-xs bg-white text-black font-bold px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/95 transition-transform hover:scale-105"
        >
          {lang === "en" ? "Book the Flight" : "Réserver un vol"}
        </a>
        <a
          href="#booking"
          title="Réserver"
          className="w-9 h-9 bg-white rounded-full text-black flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
        >
          <Plane size={18} className="text-black rotate-45" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;