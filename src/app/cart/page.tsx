"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Truck,
  ArrowRight,
  ShieldCheck,
  Phone,
  Tag,
  CheckCircle,
  RotateCcw,
  Award,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    getTotalItems,
  } = useCartStore();

  const [mounted, setMounted] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentItems = mounted ? items : [];
  const subtotal = mounted ? getSubtotal() : 0;
  const totalCount = mounted ? getTotalItems() : 0;
  const qualifiesForFreeShipping = subtotal >= 49.99;
  const shippingCost = qualifiesForFreeShipping ? 0 : (currentItems.length > 0 ? 7.99 : 0);
  const total = Math.max(0, subtotal - discount + shippingCost);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const code = promoCode.trim().toUpperCase();
    if (code === "SAVE10" || code === "SXM10") {
      setDiscount(10.0);
      setPromoSuccess(true);
    } else if (code === "FREESHIP") {
      setDiscount(7.99);
      setPromoSuccess(true);
    } else {
      setPromoError("Invalid promotional coupon code.");
    }
  };

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <AnnouncementBar />
      <Header />
      <CartDrawer />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#00629b]">Home</Link>
          <span>/</span>
          <span className="font-bold text-neutral-800">Shopping Cart</span>
        </div>

        {isOrdered ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 text-center max-w-xl mx-auto space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black text-neutral-900">
                Order Received!
              </h1>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Thank you for your order. A confirmation email with your tracking number and
                SiriusXM radio activation instructions has been prepared.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#002b49] text-white text-xs space-y-1">
              <div className="font-bold text-[#38bdf8]">Need Help Activating Your Subscription?</div>
              <p className="text-neutral-300">
                Call toll-free <a href="tel:+18333442286" className="underline font-bold text-white">+1-833-344-2286</a> with your radio ID.
              </p>
            </div>

            <Link
              href="/"
              className="inline-block bg-[#00629b] hover:bg-[#004f7c] text-white text-sm font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        ) : currentItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-16 border border-neutral-200 text-center max-w-lg mx-auto space-y-6 shadow-xs">
            <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <ShoppingCart className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-black text-neutral-900">
                Your Shopping Cart is Empty
              </h1>
              <p className="text-sm text-neutral-600">
                Looks like you haven&apos;t added any items yet. Recreate your driving experience with the Onyx EZR.
              </p>
            </div>
            <Link
              href="/#kit-selector"
              className="inline-block bg-[#00629b] hover:bg-[#004f7c] text-white text-sm font-bold px-8 py-3 rounded-xl transition-colors shadow-xs"
            >
              Shop Onyx EZR with Vehicle Kit
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <h1 className="text-2xl sm:text-3xl font-black text-neutral-900">
                  Shopping Cart ({totalCount} {totalCount === 1 ? "item" : "items"})
                </h1>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-neutral-500 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>

              {/* Items Table/Cards */}
              <div className="space-y-4">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl bg-[#f8fafc] border border-neutral-100 p-2 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                          {item.title}
                        </h2>
                        {item.kitName && (
                          <div className="text-xs font-semibold text-[#00629b]">
                            Selected: {item.kitName}
                          </div>
                        )}
                        <div className="text-[11px] text-neutral-400">
                          Model: {item.modelNumber}
                        </div>
                        <div className="text-xs font-bold text-neutral-800 sm:hidden">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                      {/* Quantity */}
                      <div className="flex items-center border border-neutral-200 rounded-xl bg-neutral-50 overflow-hidden text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-1.5 hover:bg-neutral-200 text-neutral-600 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1 font-bold text-neutral-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-1.5 hover:bg-neutral-200 text-neutral-600 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="text-right">
                        <div className="text-base font-black text-neutral-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-[10px] text-neutral-400 hidden sm:block">
                          ${item.price.toFixed(2)} ea
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Shipping Alert Box */}
              <div className="p-4 rounded-2xl bg-[#e8f3fb] border border-[#b8daf2] flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-[#00629b]" />
                  <div>
                    <span className="font-bold text-[#002b49]">
                      {qualifiesForFreeShipping
                        ? "Congratulations! You have FREE Standard Ground Shipping."
                        : "Orders $49.99 and up qualify for Free Standard Shipping."}
                    </span>
                    <p className="text-neutral-600 mt-0.5">
                      Fast dispatch from our authorized warehouse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-5">
                <h2 className="text-lg font-black text-neutral-900 pb-3 border-b border-neutral-200">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Items Subtotal:</span>
                    <span className="font-bold text-neutral-900">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Standard Shipping:</span>
                    <span className="font-bold text-emerald-700">
                      {qualifiesForFreeShipping ? "FREE" : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-emerald-700 font-bold">
                      <span>Promo Discount:</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-neutral-500">
                    <span>Estimated Sales Tax:</span>
                    <span>$0.00 (Exempt)</span>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 flex justify-between text-base sm:text-lg font-black text-neutral-900">
                    <span>Order Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={applyPromo} className="pt-3 border-t border-neutral-100">
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Have a Promo Code? (Try: SAVE10)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-2 text-xs uppercase font-bold focus:border-[#00629b] outline-hidden"
                    />
                    <button
                      type="submit"
                      className="bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoSuccess && (
                    <p className="text-[11px] font-bold text-emerald-600 mt-1.5">
                      Coupon applied successfully!
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] font-bold text-red-600 mt-1.5">
                      {promoError}
                    </p>
                  )}
                </form>

                {/* Place Order Button */}
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[#00629b] hover:bg-[#004f7c] text-white py-3.5 rounded-xl font-bold text-base shadow-md transition-all cursor-pointer"
                >
                  <span>Place Order (${total.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Phone Call Help Box */}
                <div className="p-4 rounded-2xl bg-[#002b49] text-white text-center space-y-1">
                  <div className="text-xs uppercase font-extrabold text-[#38bdf8] tracking-wider">
                    Order Assistance Hotline
                  </div>
                  <a
                    href="tel:+18333442286"
                    className="flex items-center justify-center gap-2 text-base font-black hover:text-[#38bdf8] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#38bdf8]" />
                    <span>1-833-344-2286</span>
                  </a>
                  <p className="text-[10px] text-neutral-400">
                    Live phone agents available to answer questions or process orders.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
