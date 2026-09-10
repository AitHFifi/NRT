"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "@/data/translations";

const LanguageCurrencyContext = createContext(null);

const RATES = {
  XAF: 1,
  EUR: 1 / 655.957,
  USD: 1 / 605.0,
};

export function LanguageCurrencyProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("nrt_lang");
        if (saved === "fr" || saved === "en") return saved;
      } catch {}
    }
    return "fr";
  });

  const [currency, setCurrencyState] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("nrt_curr");
        if (saved === "XAF" || saved === "EUR" || saved === "USD") return saved;
      } catch {}
    }
    return "XAF";
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("nrt_lang", newLang);
    } catch {}
  };

  const setCurrency = (newCurr) => {
    setCurrencyState(newCurr);
    try {
      localStorage.setItem("nrt_curr", newCurr);
    } catch {}
  };

  // Helper for hierarchical translation keys like "nav.brand" or "booking.title"
  const t = (path) => {
    const keys = path.split(".");
    let current = translations[lang];
    for (const k of keys) {
      if (!current || current[k] === undefined) {
        // Fallback to French or path
        let fallback = translations["fr"];
        for (const fbKey of keys) {
          if (!fallback || fallback[fbKey] === undefined) return path;
          fallback = fallback[fbKey];
        }
        return fallback;
      }
      current = current[k];
    }
    return current;
  };

  const formatPrice = (amountInXAF) => {
    if (typeof amountInXAF !== "number") return "";
    if (currency === "XAF") {
      return `${amountInXAF.toLocaleString("fr-FR")} FCFA`;
    }
    if (currency === "EUR") {
      const eur = Math.round(amountInXAF * RATES.EUR);
      return `${eur.toLocaleString("fr-FR")} €`;
    }
    if (currency === "USD") {
      const usd = Math.round(amountInXAF * RATES.USD);
      return `$${usd.toLocaleString("en-US")}`;
    }
    return `${amountInXAF} FCFA`;
  };

  return (
    <LanguageCurrencyContext.Provider
      value={{
        lang,
        setLang,
        currency,
        setCurrency,
        t,
        formatPrice,
      }}
    >
      {children}
    </LanguageCurrencyContext.Provider>
  );
}

export function useLanguageCurrency() {
  const ctx = useContext(LanguageCurrencyContext);
  if (!ctx) {
    throw new Error("useLanguageCurrency must be used within LanguageCurrencyProvider");
  }
  return ctx;
}
