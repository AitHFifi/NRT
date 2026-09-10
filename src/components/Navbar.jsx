"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Globe } from "lucide-react";
import NavItem from "./NavbarItem";
import nrtLogo from "@/assets/images/logo.svg";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, currency, setCurrency, t } = useLanguageCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinksLeft = [
    { text: t("nav.scheduledFlights"), href: "#booking" },
    { text: t("nav.routeMap"), href: "#network" },
    { text: t("nav.fleet"), href: "#fleet" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-6 z-[100] pointer-events-none">
        {/* Desktop Left Navigation */}
        <div className="hidden lg:flex items-center gap-3 tracking-tight pointer-events-auto">
          {navLinksLeft.map((link) => (
            <a key={link.href} href={link.href}>
              <NavItem text={link.text} />
            </a>
          ))}
        </div>

        {/* Desktop Center: Accessible & Clickable NRT Brand Logo (Fades in on scroll) */}
        <div
          className={`hidden lg:flex items-center justify-center transition-all duration-500 ease-out ${
            scrolled
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href="#top"
            aria-label="NRT Gabon"
            className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={nrtLogo}
              alt="NRT Gabon"
              width={140}
              height={45}
              priority
              className="w-auto h-8 sm:h-9 object-contain brightness-0 invert drop-shadow-md"
            />
          </a>
        </div>

        {/* Desktop Right: Switchers and contact info (no breadcrumb/hamburger on desktop) */}
        <div className="hidden lg:flex items-center gap-3 tracking-tight pointer-events-auto">

          {/* Minimal Currency Switcher */}
          <div className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-md p-0.5 text-[10px] font-mono ml-2">
            {(["XAF", "EUR"]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  currency === curr
                    ? "bg-white/20 text-white font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {curr === "XAF" ? "FCFA" : curr}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 bg-white/5 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-white transition-colors cursor-pointer"
          >
            <Globe size={12} className="text-white/70" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Discreet Luxury Phone Link */}
          <a
            href="tel:+241011700000"
            className="flex items-center gap-1.5 text-white/80 hover:text-white text-[10px] font-medium tracking-tight px-2.5 py-1 rounded-md transition-colors"
          >
            <Phone size={11} className="text-white/60" />
            <span className="font-mono">+241 011 70 00 00</span>
          </a>
        </div>

        {/* Mobile View: NRT Logo at top-left (fades in on scroll) and Hamburger icon at top-right */}
        <div className="lg:hidden flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#top"
            aria-label="NRT Gabon"
            className={`flex items-center cursor-pointer transition-all duration-500 ease-out hover:opacity-80 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Image
              src={nrtLogo}
              alt="NRT Gabon"
              width={110}
              height={36}
              priority
              className="w-auto h-7 sm:h-8 object-contain brightness-0 invert drop-shadow-md"
            />
          </a>
          <button
            onClick={() => setIsOpen(true)}
            aria-label={t("nav.openMenu")}
            className="text-white p-2 hover:bg-white/10 rounded-md transition-colors cursor-pointer ml-auto"
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[300] transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto backdrop-blur-md" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div
          className={`absolute right-0 top-0 h-screen w-full sm:w-[340px] md:w-[360px] bg-[#06080c] border-l border-white/5 transition-transform duration-500 ease-out flex flex-col px-8 py-8 sm:px-10 sm:py-10 overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Logo at Top Left and X at Top Right */}
          <div className="flex items-center justify-between">
            <div className="w-28 sm:w-32">
              <Image
                src={nrtLogo}
                alt="NRT Gabon"
                width={130}
                height={45}
                priority
                className="w-auto h-7 sm:h-8 object-contain brightness-0 invert"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={t("nav.closeMenu")}
              className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
            >
              <X size={22} strokeWidth={1.6} />
            </button>
          </div>

          {/* Links & Contact in Clean SKIGHT Style */}
          <div className="mt-14 sm:mt-16 flex flex-col gap-6 sm:gap-7">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg sm:text-xl font-bold text-white hover:text-white/70 transition-colors tracking-tight"
              >
                {link.text}
              </a>
            ))}

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-col gap-6 sm:gap-7">
              <a
                href="tel:+241011700000"
                className="text-lg sm:text-xl font-bold text-white hover:text-white/70 transition-colors tracking-tight"
              >
                +241 011 70 00 00
              </a>
              <a
                href="mailto:contact@nrt-gabon.ga"
                className="text-base sm:text-lg font-bold text-white hover:text-white/70 transition-colors tracking-tight"
              >
                contact@nrt-gabon.ga
              </a>
            </div>
          </div>

          {/* Discreet Minimalist Language & Currency Switcher at bottom */}
          <div className="mt-auto pt-8 flex items-center gap-3 text-xs text-white/40">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang.toUpperCase()}
            </button>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              {(["XAF", "EUR"]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`cursor-pointer transition-colors ${
                    currency === curr ? "text-white font-bold" : "text-white/40 hover:text-white"
                  }`}
                >
                  {curr === "XAF" ? "FCFA" : curr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;