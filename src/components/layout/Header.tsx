"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  Radio,
  Car,
  Home,
  Wrench,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const { openCart, getTotalItems } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCartCount = mounted ? getTotalItems() : 0;

  const navLinks = [
    {
      title: "Radios & Tuners",
      href: "/#radios",
      badge: "Featured",
      icon: Radio,
    },
    {
      title: "Vehicle Kits",
      href: "/#kit-selector",
      icon: Car,
    },
    {
      title: "Home & Portable",
      href: "/#accessories",
      icon: Home,
    },
    {
      title: "Accessories",
      href: "/#accessories",
      icon: Wrench,
    },
    {
      title: "Features & Demos",
      href: "/#features",
      icon: Sparkles,
    },
    {
      title: "FAQ & Support",
      href: "/#faq",
      icon: HelpCircle,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-xs">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-[#00629b] focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Car FM Radio Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-48 sm:w-60 h-10 sm:h-12 flex items-center">
                <Image
                  src="/images/carfmradio-logo.svg"
                  alt="Car FM Radio"
                  fill
                  sizes="240px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search radios, kits, parts (e.g. Onyx EZR, antenna, dock)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-100/80 hover:bg-neutral-100 focus:bg-white text-sm text-neutral-900 pl-10 pr-4 py-2 rounded-full border border-neutral-300 focus:border-[#00629b] focus:ring-2 focus:ring-[#00629b]/20 outline-hidden transition-all"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Direct Phone Call Assistance */}
            <a
              href="tel:+18333442286"
              className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:border-[#00629b] hover:bg-neutral-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#00629b]/10 flex items-center justify-center text-[#00629b] group-hover:bg-[#00629b] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                  Call &amp; Order
                </div>
                <div className="text-xs font-bold text-[#002b49] tracking-tight">
                  1-833-344-2286
                </div>
              </div>
            </a>

            {/* Subscriber Status Link */}
            <a
              href="https://care.siriusxm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline text-xs font-semibold text-neutral-600 hover:text-[#00629b] transition-colors"
            >
              I&apos;m already a subscriber &rarr;
            </a>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-[#00629b]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-[#002b49] hover:bg-[#003c66] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer group"
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 text-[#38bdf8] group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline">Cart</span>
              {totalCartCount > 0 ? (
                <span className="bg-[#008be2] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalCartCount}
                </span>
              ) : (
                <span className="text-white/60 text-xs hidden sm:inline">(0)</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expansion */}
        {searchOpen && (
          <div className="lg:hidden pb-3 pt-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search radios, kits, parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-100 text-sm text-neutral-900 pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:border-[#00629b] outline-hidden"
                autoFocus
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Category Navigation */}
      <nav className="hidden md:block bg-[#f8fafc] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-1 sm:gap-2 h-11 text-xs font-semibold text-neutral-700">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-neutral-200/70 hover:text-[#00629b] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{link.title}</span>
                    {link.badge && (
                      <span className="text-[10px] font-bold bg-[#00629b] text-white px-1.5 py-0.2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-neutral-200 shadow-xl z-50 animate-in slide-in-from-top duration-200">
          <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              Browse Categories
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#00629b]" />
                    <span>{link.title}</span>
                  </div>
                  {link.badge ? (
                    <span className="text-[10px] font-bold bg-[#00629b] text-white px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 -rotate-90" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-neutral-200">
              <a
                href="tel:+18333442286"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#002b49] text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                Call +1-833-344-2286 to Order
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
