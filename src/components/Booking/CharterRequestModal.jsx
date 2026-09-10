"use client";

import React, { useState } from "react";
import { X, Send, Phone, CheckCircle2, MessageCircle, Shield, Plane } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const CharterRequestModal = ({ isOpen, onClose, initialData = {} }) => {
  const { t, formatPrice } = useLanguageCurrency();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    origin: initialData.origin || "Libreville (LBV)",
    destination: initialData.destination || "Port-Gentil (POG)",
    date: initialData.date || new Date().toISOString().split("T")[0],
    aircraftType: initialData.aircraftType || "turboprop",
    passengers: initialData.passengers || "8",
    catering: true,
    medevacReady: false,
    cargoPayload: false,
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour NRT Gabon Ops,\nDemande d'affrètement privé :\n- Itinéraire : ${formData.origin} -> ${formData.destination}\n- Date : ${formData.date}\n- Appareil : ${formData.aircraftType}\n- Passagers : ${formData.passengers}\n- Contact : ${formData.contactName} (${formData.phone})`
  );

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0d131a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-white/10 border-b border-white/10 px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center shadow-md">
              <Plane className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#D4AF37]">
                NRT Corporate & VIP Flights
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">
                {t("charter.title")}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-white">
                Demande transmise avec succès !
              </h4>
              <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                {t("charter.quoteSuccess")}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/241011700000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-2.5 px-5 rounded-xl text-xs transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Accélérer sur WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-2.5 px-6 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-white/70 text-[11px] leading-relaxed">
                {t("charter.description")}
              </p>

              {/* Grid 1: Routing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/60 mb-1 font-medium">
                    Origine
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) =>
                      setFormData({ ...formData, origin: e.target.value })
                    }
                    className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-1 font-medium">
                    Destination
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                  />
                </div>
              </div>

              {/* Grid 2: Date & Pax */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/60 mb-1 font-medium">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-1 font-medium">
                    {t("charter.estimatedPax")}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="70"
                    value={formData.passengers}
                    onChange={(e) =>
                      setFormData({ ...formData, passengers: e.target.value })
                    }
                    className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                  />
                </div>
              </div>

              {/* Aircraft Category */}
              <div>
                <label className="block text-white/60 mb-1 font-medium">
                  {t("charter.aircraftType")}
                </label>
                <select
                  value={formData.aircraftType}
                  onChange={(e) =>
                    setFormData({ ...formData, aircraftType: e.target.value })
                  }
                  className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                >
                  <option value="turboprop">{t("charter.turboprop")}</option>
                  <option value="regionalJet">{t("charter.regionalJet")}</option>
                  <option value="vipTurboprop">
                    {t("charter.vipTurboprop")}
                  </option>
                  <option value="any">{t("charter.anyAircraft")}</option>
                </select>
              </div>

              {/* Addons check */}
              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-white/80">
                  <input
                    type="checkbox"
                    checked={formData.catering}
                    onChange={(e) =>
                      setFormData({ ...formData, catering: e.target.checked })
                    }
                    className="rounded border-white/20 text-[#009b4d] focus:ring-0"
                  />
                  <span>{t("charter.catering")}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-white/80">
                  <input
                    type="checkbox"
                    checked={formData.medevacReady}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medevacReady: e.target.checked,
                      })
                    }
                    className="rounded border-white/20 text-[#009b4d] focus:ring-0"
                  />
                  <span>{t("charter.medevacReady")}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-white/80">
                  <input
                    type="checkbox"
                    checked={formData.cargoPayload}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cargoPayload: e.target.checked,
                      })
                    }
                    className="rounded border-white/20 text-[#009b4d] focus:ring-0"
                  />
                  <span>{t("charter.cargoPayload")}</span>
                </label>
              </div>

              {/* Contact details */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/60 mb-1 font-medium">
                      Société / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: TotalEnergies, Comilog..."
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#009b4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-1 font-medium">
                      Nom du contact
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom complet"
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactName: e.target.value,
                        })
                      }
                      className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/60 mb-1 font-medium">
                      Téléphone (+241...)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+241 077 00 00 00"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 mb-1 font-medium">
                      Email professionnel
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@entreprise.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#141b24] border border-white/15 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 py-3.5 px-4 rounded-xl font-bold transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={14} />
                  <span>{t("charter.requestQuote")}</span>
                </button>
                <a
                  href={`https://wa.me/241011700000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] py-3 px-4 rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharterRequestModal;
