"use client";

import React from "react";
import { CheckCircle2, Sparkles, Car, Home, Radio } from "lucide-react";
import { KitOption } from "@/types/product";

interface KitSelectorProps {
  kits: KitOption[];
  selectedKit: KitOption;
  onSelectKit: (kit: KitOption) => void;
}

export const KitSelector: React.FC<KitSelectorProps> = ({
  kits,
  selectedKit,
  onSelectKit,
}) => {
  const getKitIcon = (id: string) => {
    switch (id) {
      case "vehicle":
        return <Car className="w-4 h-4 text-[#00629b]" />;
      case "vehicle-home":
        return <Home className="w-4 h-4 text-[#0073d1]" />;
      case "radio-only":
        return <Radio className="w-4 h-4 text-neutral-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-3" id="kit-selector">
      <div className="flex items-center justify-between">
        <label className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
          Select Configuration Kit:
        </label>
        <span className="text-xs text-neutral-500 font-medium">
          Selected: <strong className="text-[#00629b]">{selectedKit.name}</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {kits.map((kit) => {
          const isSelected = kit.id === selectedKit.id;
          return (
            <div
              key={kit.id}
              onClick={() => onSelectKit(kit)}
              className={`relative p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start justify-between gap-3 ${
                isSelected
                  ? "border-[#00629b] bg-[#f0f7fc] shadow-xs ring-1 ring-[#00629b]/20"
                  : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-[#00629b] bg-[#00629b] text-white"
                        : "border-neutral-300 bg-white"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getKitIcon(kit.id)}
                    <span className="text-sm sm:text-base font-bold text-neutral-900">
                      {kit.name}
                    </span>
                    {kit.badge && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#00629b] text-white">
                        <Sparkles className="w-2.5 h-2.5" />
                        {kit.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500">{kit.subtitle}</p>
                </div>
              </div>

              {/* Right Price */}
              <div className="text-right shrink-0">
                <div className="text-base sm:text-lg font-black text-neutral-900">
                  ${kit.price.toFixed(2)}
                </div>
                {kit.originalPrice && (
                  <div className="text-xs text-neutral-400 line-through">
                    ${kit.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

