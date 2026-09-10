"use client";

import React from "react";
import { X, CheckCircle2, Plane, Download, Luggage, ShieldCheck } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const BookingSummaryModal = ({ isOpen, onClose, bookingData }) => {
  const { t, formatPrice } = useLanguageCurrency();

  if (!isOpen || !bookingData) return null;

  const {
    flight,
    origin,
    destination,
    date,
    passengers,
    cabinClass,
    passengerName,
    pnr,
  } = bookingData;

  const unitPrice =
    cabinClass === "business"
      ? flight.priceBusinessXAF
      : flight.priceEconomyXAF;
  const totalPrice = unitPrice * passengers;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0c1219] border border-white/20 rounded-3xl shadow-2xl overflow-hidden text-white">
        {/* Top Airline Header */}
        <div className="bg-white/10 border-b border-white/10 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center shadow-md">
              <Plane className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37]">
                NRT Gabon • Billet Électronique
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">
                {t("summary.title")}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Boarding Pass Body */}
        <div className="p-6 space-y-6">
          {/* Status banner */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3.5 text-xs text-white/80">
            <CheckCircle2 size={18} className="shrink-0 text-[#D4AF37]" />
            <p>{t("summary.confirmNotice")}</p>
          </div>

          {/* Ticket Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-5">
            {/* PNR & Flight No */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
              <div>
                <span className="text-white/40 block text-[10px] uppercase font-mono">
                  {t("summary.bookingRef")}
                </span>
                <span className="font-mono text-base font-bold text-white tracking-wider">
                  {pnr}
                </span>
              </div>
              <div className="text-right">
                <span className="text-white/40 block text-[10px] uppercase font-mono">
                  {t("summary.flightNo")}
                </span>
                <span className="font-mono text-base font-bold text-white">
                  {flight.flightNo}
                </span>
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {origin.code}
                </span>
                <p className="text-xs text-white/70">{origin.city}</p>
                <p className="text-[11px] font-mono text-white/50">
                  {flight.departureTime}
                </p>
              </div>

              <div className="flex flex-col items-center px-4">
                <span className="text-[10px] text-white/50 mb-1 font-mono">
                  {flight.duration}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-12 sm:w-16 h-px bg-white/20" />
                  <Plane size={14} className="text-white rotate-90 opacity-80" />
                  <div className="w-12 sm:w-16 h-px bg-white/20" />
                </div>
                <span className="text-[9px] text-white/60 font-semibold mt-1">
                  {flight.aircraft}
                </span>
              </div>

              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  {destination.code}
                </span>
                <p className="text-xs text-white/70">{destination.city}</p>
                <p className="text-[11px] font-mono text-white/50">
                  {flight.arrivalTime}
                </p>
              </div>
            </div>

            {/* Passenger & Fare Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
              <div>
                <span className="text-white/40 block text-[10px] uppercase font-mono">
                  {t("summary.passengerName")}
                </span>
                <span className="font-semibold text-white truncate block">
                  {passengerName || "Voyageur NRT"}
                </span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase font-mono">
                  {t("summary.date")}
                </span>
                <span className="font-medium text-white">{date}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase font-mono">
                  {t("summary.cabinClass")}
                </span>
                <span className="font-semibold text-white capitalize">
                  {cabinClass === "business" ? "Club Affaires" : "Économique"}
                </span>
              </div>
            </div>

            {/* Baggage and Amenities */}
            <div className="flex items-center justify-between text-[11px] text-white/70 bg-white/5 rounded-xl px-3.5 py-2.5">
              <div className="flex items-center gap-1.5">
                <Luggage size={13} className="text-[#D4AF37]" />
                <span>
                  {cabinClass === "business"
                    ? "2 × 23kg Bagages inclus"
                    : "1 × 23kg Bagage en soute inclus"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80 font-medium">
                <ShieldCheck size={13} className="text-white/60" />
                <span>Assurance Incluse</span>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-sm text-white/70">
                {t("summary.totalPrice")} ({passengers} pax)
              </span>
              <span className="text-xl font-bold font-mono text-white">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                alert("Votre carte d'embarquement NRT a été téléchargée (simulation PDF).");
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Download size={15} />
              <span>{t("summary.downloadBoardingPass")}</span>
            </button>
            <button
              onClick={onClose}
              className="sm:w-32 py-3.5 px-4 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              {t("summary.close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryModal;
