"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, Check, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { KitOption } from "@/types/product";

interface ProductGalleryProps {
  selectedKit: KitOption;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ selectedKit }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Reset active image index when kit changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedKit.id]);

  const images = selectedKit.images;
  const currentImage = images[activeImageIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main View Area */}
      <div className="relative bg-[#f8fafc] rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs group">
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {selectedKit.badge && (
            <span className="inline-flex items-center gap-1 bg-[#00629b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3 text-[#38bdf8]" />
              {selectedKit.badge}
            </span>
          )}
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-xs text-neutral-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-neutral-200/80 shadow-xs">
            <Check className="w-3 h-3 text-emerald-600" />
            DIY Installation
          </span>
        </div>

        {/* Free Shipping Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
            Free Shipping
          </span>
        </div>

        {/* Main Display Container with Hover Zoom */}
        <div
          className="relative w-full aspect-4/3 sm:aspect-16/11 max-h-[440px] flex items-center justify-center p-4 sm:p-8 cursor-crosshair overflow-hidden"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <div
            className="relative w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: isZoomed ? "scale(1.35)" : "scale(1)",
              transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-opacity duration-300"
              priority
            />
          </div>

          {/* Zoom hint badge */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-neutral-600 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-neutral-200 flex items-center gap-1.5 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-3.5 h-3.5 text-[#00629b]" />
            <span>Hover to zoom</span>
          </div>

          {/* Arrow navigation for mobile and desktop */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-700 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-700 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Current Image Caption */}
        <div className="bg-white/80 border-t border-neutral-200/60 px-4 py-2 text-center text-xs font-semibold text-neutral-600">
          {currentImage.label} ({activeImageIndex + 1} of {images.length})
        </div>
      </div>

      {/* Thumbnail Navigation Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {images.map((img, idx) => {
            const isActive = idx === activeImageIndex;
            return (
              <button
                key={img.label + idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white cursor-pointer ${
                  isActive
                    ? "border-[#00629b] ring-2 ring-[#00629b]/20 shadow-xs"
                    : "border-neutral-200 hover:border-neutral-400 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Select ${img.label}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-neutral-900/60 text-white text-[9px] font-bold text-center py-0.5 truncate px-1">
                  {img.label}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Trust Callout Under Gallery */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Includes Official 1-Year SiriusXM Warranty</span>
        </div>
        <a
          href="tel:+18333442286"
          className="font-bold text-[#00629b] hover:underline"
        >
          Questions? Call 1-833-344-2286
        </a>
      </div>
    </div>
  );
};

