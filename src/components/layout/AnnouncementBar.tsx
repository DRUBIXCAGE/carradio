"use client";

import React, { useState } from "react";
import { Phone, Truck, ShieldCheck, X, Radio } from "lucide-react";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#002b49] text-white text-xs sm:text-sm font-medium border-b border-[#00385f] transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Domain Branding & Shipping */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#001f35] text-[#38bdf8] px-2.5 py-0.5 rounded-full border border-white/10 font-bold text-xs">
            <Radio className="w-3.5 h-3.5 text-[#38bdf8]" />
            CarFMRadio.com
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#38bdf8] shrink-0" />
            <span>
              <strong className="font-semibold text-white">Free Ground Shipping</strong> on orders $49.99+
            </span>
          </div>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-white/90">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            30-Day Money-Back Guarantee
          </span>
        </div>

        {/* Right: Phone Hotline */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+18333442286"
            className="flex items-center gap-1.5 text-white hover:text-[#38bdf8] transition-colors font-semibold group"
          >
            <Phone className="w-3.5 h-3.5 text-[#38bdf8] group-hover:animate-pulse" />
            <span className="hidden sm:inline text-white/80 font-normal">Order &amp; Support:</span>
            <span className="tracking-wide">+1-833-344-2286</span>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
