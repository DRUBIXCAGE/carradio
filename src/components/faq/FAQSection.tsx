"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Phone, Search, Sparkles } from "lucide-react";
import { faqItems } from "@/data/faqData";

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Installation",
    "Subscription",
    "Features",
    "Compatibility",
    "Warranty & Shipping",
  ];

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white border-t border-neutral-200" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-[#e8f3fb] px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600">
            Everything you need to know about setting up and using the Onyx EZR.
          </p>
        </div>

        {/* Search bar inside FAQ */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search FAQs (e.g. subscription, install, aux)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f8fafc] text-sm text-neutral-900 pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#00629b] focus:ring-2 focus:ring-[#00629b]/20 outline-hidden transition-all"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3 pointer-events-none" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#002b49] text-white shadow-xs"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#00629b]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#00629b] font-semibold">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Toll-Free Help Banner Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#001f36] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Still have questions about vehicle installation or plans?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg">
              Our dedicated product support team is available toll-free 7 days a week to assist with
              compatibility, ordering, and activation.
            </p>
          </div>

          <a
            href="tel:+18333442286"
            className="flex items-center gap-2.5 bg-[#00629b] hover:bg-[#0073d1] text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 text-[#38bdf8]" />
            <span>Call +1-833-344-2286</span>
          </a>
        </div>
      </div>
    </section>
  );
};

