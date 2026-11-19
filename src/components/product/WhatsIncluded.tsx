"use client";

import React from "react";
import Image from "next/image";
import { Check, Package, Phone, HelpCircle } from "lucide-react";
import { KitOption } from "@/types/product";

interface WhatsIncludedProps {
  selectedKit: KitOption;
}

export const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ selectedKit }) => {
  return (
    <section className="py-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-[#e8f3fb] px-3 py-1 rounded-full mb-2">
              <Package className="w-3.5 h-3.5" />
              In the Box
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              What&apos;s Included in the {selectedKit.name}
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Complete hardware bundle — ready for quick do-it-yourself installation.
            </p>
          </div>

          <a
            href="tel:+18333442286"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00629b] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-lg transition-colors border border-neutral-200 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Need Installation Help? 1-833-344-2286</span>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Visual Graphic of Box Layout */}
          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden p-6 flex items-center justify-center">
            <Image
              src={
                selectedKit.id === "vehicle-home"
                  ? "/images/onyx-ezr-home-bundle.svg"
                  : "/images/onyx-ezr-kit-components.svg"
              }
              alt="Included Components Overview"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain p-4"
            />
          </div>

          {/* Right: Itemized Checklist */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedKit.included.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs hover:border-[#00629b]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00629b]/10 text-[#00629b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Compatibility */}
            <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3 text-xs text-neutral-600">
              <HelpCircle className="w-4 h-4 text-[#00629b] shrink-0 mt-0.5" />
              <p>
                <strong>Plug &amp; Play Versatility:</strong> The Onyx EZR receiver utilizes standard
                universal SiriusXM dock connectors. You can easily remove the receiver from your vehicle
                dock and plug it into compatible home docks or boomboxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

