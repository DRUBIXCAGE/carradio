"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Star, Check, Sparkles, Wrench, Phone } from "lucide-react";
import { Accessory } from "@/types/product";
import { compatibleAccessories } from "@/data/accessoriesData";
import { useCartStore } from "@/store/cartStore";

export const CompatibleAccessories = () => {
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCartStore();

  const handleAddAccessory = (acc: Accessory) => {
    addItem({
      id: acc.id,
      productId: acc.id,
      title: acc.title,
      modelNumber: acc.modelNumber,
      price: acc.price,
      originalPrice: acc.originalPrice,
      quantity: 1,
      image: acc.image,
      isKit: false,
    });

    setAddedId(acc.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };

  return (
    <section className="py-16 bg-white border-t border-neutral-200" id="accessories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-[#e8f3fb] px-3 py-1 rounded-full mb-2">
              <Wrench className="w-3.5 h-3.5" />
              Upgrade Your Setup
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Compatible Docks, Kits &amp; Accessories
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Expand your Onyx EZR to home, office, and outdoor portable listening.
            </p>
          </div>

          <a
            href="tel:+18333442286"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00629b] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-lg transition-colors border border-neutral-300 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Order Accessories by Phone: 1-833-344-2286</span>
          </a>
        </div>

        {/* Accessory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {compatibleAccessories.map((acc) => {
            const isJustAdded = addedId === acc.id;
            return (
              <div
                key={acc.id}
                className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#00629b]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-4/3 max-h-[220px] rounded-xl bg-[#f8fafc] border border-neutral-100 overflow-hidden mb-4 p-4 flex items-center justify-center">
                    {acc.badge && (
                      <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00629b] text-white">
                        {acc.badge}
                      </span>
                    )}
                    <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-bold text-neutral-500 bg-white/90 px-2 py-0.5 rounded-md border border-neutral-200">
                      {acc.category}
                    </span>
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={acc.image}
                        alt={acc.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Title & Model */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Model: {acc.modelNumber}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#00629b] transition-colors leading-snug">
                      {acc.title}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 py-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-neutral-500">
                      {acc.rating} ({acc.reviewCount})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                    {acc.description}
                  </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-lg font-black text-neutral-900">
                      ${acc.price.toFixed(2)}
                    </div>
                    {acc.originalPrice && (
                      <div className="text-xs text-neutral-400 line-through">
                        ${acc.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddAccessory(acc)}
                    disabled={isJustAdded}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isJustAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-[#002b49] hover:bg-[#004f7c] text-white shadow-xs"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

