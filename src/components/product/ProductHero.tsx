"use client";

import React, { useState } from "react";
import { ProductDetail, KitOption } from "@/types/product";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { WhatsIncluded } from "./WhatsIncluded";
import { SplitScreenDemo } from "./SplitScreenDemo";
import { TuneMixDemo } from "./TuneMixDemo";

interface ProductHeroProps {
  product: ProductDetail;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const [selectedKit, setSelectedKit] = useState<KitOption>(product.kits[0]);

  return (
    <div className="space-y-12">
      {/* 2-Column Hero: Gallery on Left, Product Info on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Gallery (sticky on desktop) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <ProductGallery selectedKit={selectedKit} />
          </div>

          {/* Right Column: Product Information & Purchase Area */}
          <div className="lg:col-span-5">
            <ProductInfo
              product={product}
              selectedKit={selectedKit}
              onSelectKit={setSelectedKit}
            />
          </div>
        </div>
      </section>

      {/* Interactive Feature Deep Dives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitScreenDemo />
        <TuneMixDemo />
      </section>

      {/* Dynamic "What's Included" for Selected Kit */}
      <WhatsIncluded selectedKit={selectedKit} />
    </div>
  );
};

