"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    getTotalItems,
  } = useCartStore();

  const [mounted, setMounted] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const totalCount = getTotalItems();
  const freeShippingThreshold = 49.99;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold;
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping Cart Drawer"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#00629b]" />
            <h2 className="text-base sm:text-lg font-black text-neutral-900">
              Your Cart ({totalCount})
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-[#e8f3fb] p-3 sm:p-4 border-b border-[#cde4f7] text-xs">
          <div className="flex items-center gap-2 mb-1.5 font-bold text-[#002b49]">
            <Truck className="w-4 h-4 text-[#00629b]" />
            {qualifiesForFreeShipping ? (
              <span className="text-emerald-700">
                You qualify for <strong>FREE Ground Shipping!</strong>
              </span>
            ) : (
              <span>
                Add <strong>${amountNeeded.toFixed(2)}</strong> more for FREE Ground Shipping
              </span>
            )}
          </div>
          <div className="w-full h-2 rounded-full bg-white overflow-hidden border border-[#b8daf2]">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                qualifiesForFreeShipping ? "bg-emerald-500" : "bg-[#008be2]"
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-800">
                  Your cart is empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Discover the Onyx EZR satellite radio and accessories for crystal-clear music on the road.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="bg-[#00629b] hover:bg-[#004f7c] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Shop Onyx EZR Now
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200 bg-white shadow-2xs hover:border-neutral-300 transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-lg bg-[#f8fafc] border border-neutral-100 shrink-0 p-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  {item.kitName && (
                    <div className="text-[11px] font-semibold text-[#00629b]">
                      Kit: {item.kitName}
                    </div>
                  )}
                  <div className="text-[10px] text-neutral-400">
                    Model: {item.modelNumber}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-black text-neutral-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50 overflow-hidden text-xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-neutral-200 text-neutral-600 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-bold text-neutral-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-neutral-200 text-neutral-600 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-[#f8fafc] space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex items-center justify-between">
                <span>Subtotal ({totalCount} items):</span>
                <span className="font-bold text-neutral-900 text-sm">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Ground Shipping:</span>
                <span className="font-bold text-emerald-700">
                  {qualifiesForFreeShipping ? "FREE" : "$7.99"}
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-500">
                <span>Estimated Sales Tax:</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-sm font-black text-neutral-900">
                <span>Estimated Total:</span>
                <span>
                  ${(subtotal + (qualifiesForFreeShipping ? 0 : 7.99)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-[#00629b] hover:bg-[#004f7c] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/cart"
                onClick={closeCart}
                className="w-full block text-center py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-[#002b49] font-bold text-xs transition-colors"
              >
                View Full Cart &amp; Details
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>30-Day Money-Back Guarantee &bull; SSL Secured</span>
            </div>
          </div>
        )}
      </aside>

      {/* Simulated Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 bg-neutral-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-neutral-900">
                    Order Summary &amp; Review
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Ready to complete your order at Car FM Radio (carfmradio.com)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
              <div className="font-bold text-neutral-800 pb-1 border-b border-neutral-200 flex justify-between">
                <span>Items ({totalCount})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {items.map((i) => (
                <div key={i.id} className="flex justify-between text-neutral-600">
                  <span className="truncate pr-2">
                    {i.quantity}x {i.title} {i.kitName && `(${i.kitName})`}
                  </span>
                  <span className="font-semibold text-neutral-800 shrink-0">
                    ${(i.price * i.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-neutral-200 flex justify-between font-black text-sm text-neutral-900">
                <span>Total Amount:</span>
                <span>
                  ${(subtotal + (qualifiesForFreeShipping ? 0 : 7.99)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Direct Phone Order Option */}
            <div className="p-4 rounded-2xl bg-[#002b49] text-white space-y-2">
              <div className="text-xs uppercase font-extrabold text-[#38bdf8] tracking-wider">
                Instant Telephone Ordering &amp; Activation
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Want to complete your order and review introductory subscription plans with a SiriusXM specialist?
              </p>
              <a
                href="tel:+18333442286"
                className="inline-flex items-center gap-2 text-white bg-[#00629b] hover:bg-[#0073d1] px-4 py-2.5 rounded-xl font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>Call +1-833-344-2286</span>
              </a>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert(
                    "Thank you for shopping at Car FM Radio (carfmradio.com)! Your order has been placed successfully."
                  );
                  clearCart();
                  setCheckoutModalOpen(false);
                  closeCart();
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Confirm Test Order
              </button>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="px-4 py-3 border border-neutral-300 rounded-xl font-bold text-xs text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

