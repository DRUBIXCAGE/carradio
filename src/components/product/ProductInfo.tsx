"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  ShoppingCart,
  Phone,
  CheckCircle,
  AlertCircle,
  Zap,
} from "lucide-react";
import { ProductDetail, KitOption } from "@/types/product";
import { KitSelector } from "./KitSelector";
import { useCartStore } from "@/store/cartStore";

interface ProductInfoProps {
  product: ProductDetail;
  selectedKit: KitOption;
  onSelectKit: (kit: KitOption) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedKit,
  onSelectKit,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: `${product.id}-${selectedKit.id}`,
      productId: product.id,
      title: product.title,
      kitName: selectedKit.name,
      modelNumber: product.modelNumber,
      price: selectedKit.price,
      originalPrice: selectedKit.originalPrice,
      quantity: quantity,
      image: selectedKit.images[0]?.src || "/images/onyx-ezr-vehicle-front.svg",
      isKit: true,
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 400);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    openCart();
  };

  const savings = selectedKit.originalPrice
    ? selectedKit.originalPrice - selectedKit.price
    : 0;

  return (
    <div className="flex flex-col space-y-6">
      {/* Brand & Model Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-[#00629b] tracking-wider uppercase bg-[#e8f3fb] px-2.5 py-0.5 rounded-sm">
            Car FM Radio • Authorized SiriusXM Retailer
          </span>
          <span className="text-xs text-neutral-400">•</span>
          <span className="text-xs font-semibold text-neutral-500">
            Model: <strong className="text-neutral-800">{product.modelNumber}</strong>
          </span>
          <span className="text-xs text-neutral-400">•</span>
          <span className="text-xs font-semibold text-neutral-500">
            SKU: <strong className="text-neutral-800">{product.sku}</strong>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
          {product.title}
        </h1>

        {/* Reviews and Ratings */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <a
            href="#reviews"
            className="text-xs sm:text-sm font-bold text-[#00629b] hover:underline"
          >
            {product.rating} ({product.reviewCount.toLocaleString()} Customer Reviews)
          </a>
        </div>
      </div>

      {/* Pricing & Savings Banner */}
      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-3xl sm:text-4xl font-black text-neutral-900">
            ${selectedKit.price.toFixed(2)}
          </span>
          {selectedKit.originalPrice && (
            <span className="text-lg text-neutral-400 line-through">
              ${selectedKit.originalPrice.toFixed(2)}
            </span>
          )}
          {savings > 0 && (
            <span className="text-xs font-extrabold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
              Save ${savings.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs text-neutral-600 flex-wrap">
          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            In Stock
          </span>
          <span>•</span>
          <span className="text-neutral-500">Ships next business day</span>
          <span>•</span>
          <span className="text-emerald-700 font-semibold">Free Ground Shipping ($49.99+)</span>
        </div>
      </div>

      {/* Subscription Disclaimer */}
      <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Subscription Note:</strong> Satellite radio subscription sold separately by SiriusXM.
          Hardware activation required. Introductory plans and promotional offers available at activation.
          Call <a href="tel:+18333442286" className="font-bold underline text-amber-950">+1-833-344-2286</a> for subscription help.
        </div>
      </div>

      {/* Product Kit Configuration Selector */}
      <KitSelector
        kits={product.kits}
        selectedKit={selectedKit}
        onSelectKit={onSelectKit}
      />

      {/* Quantity & Purchase Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center border border-neutral-300 rounded-xl bg-white overflow-hidden shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3.5 py-3 text-neutral-600 hover:bg-neutral-100 text-base font-bold transition-colors cursor-pointer"
              aria-label="Decrease Quantity"
            >
              -
            </button>
            <span className="px-4 py-3 text-sm font-bold text-neutral-900 min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3.5 py-3 text-neutral-600 hover:bg-neutral-100 text-base font-bold transition-colors cursor-pointer"
              aria-label="Increase Quantity"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdding}
            className="flex-1 flex items-center justify-center gap-2 bg-[#00629b] hover:bg-[#004f7c] active:bg-[#003d61] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-md transition-all cursor-pointer group"
          >
            <ShoppingCart className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
            <span>{isAdding ? "Adding..." : "Add to Cart"}</span>
          </button>
        </div>

        {/* Buy Now & Phone Call CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleBuyNow}
            className="w-full flex items-center justify-center gap-2 bg-[#002b49] hover:bg-[#003f6b] text-white py-3 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Buy Now (Instant Checkout)</span>
          </button>

          <a
            href="tel:+18333442286"
            className="w-full flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-[#002b49] border border-neutral-300 py-3 rounded-xl font-bold text-sm transition-colors text-center"
          >
            <Phone className="w-4 h-4 text-[#00629b]" />
            <span>Call 1-833-344-2286 to Order</span>
          </a>
        </div>
      </div>

      {/* Key Feature Highlights Checklist */}
      <div className="pt-2 border-t border-neutral-200 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
          Key Product Highlights
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
          {product.highlightPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#00629b] shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Security & Support Guarantee Icons */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-200 text-center">
        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-neutral-50 border border-neutral-200/60">
          <Truck className="w-5 h-5 text-[#00629b]" />
          <span className="text-[11px] font-bold text-neutral-800">Free Ground Shipping</span>
          <span className="text-[10px] text-neutral-500">Orders $49.99+</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-neutral-50 border border-neutral-200/60">
          <RotateCcw className="w-5 h-5 text-[#00629b]" />
          <span className="text-[11px] font-bold text-neutral-800">30-Day Returns</span>
          <span className="text-[10px] text-neutral-500">Money-Back Guarantee</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-neutral-50 border border-neutral-200/60">
          <ShieldCheck className="w-5 h-5 text-[#00629b]" />
          <span className="text-[11px] font-bold text-neutral-800">1-Year Warranty</span>
          <span className="text-[10px] text-neutral-500">SiriusXM Coverage</span>
        </div>
      </div>
    </div>
  );
};

