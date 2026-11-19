"use client";

import React, { useState } from "react";
import { Sliders, ChevronDown, Download, FileText, Phone } from "lucide-react";
import { SpecificationGroup } from "@/types/product";

interface TechnicalSpecsProps {
  groups: SpecificationGroup[];
}

export const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ groups }) => {
  const [openGroups, setOpenGroups] = useState<number[]>([0, 1, 2]);

  const toggleGroup = (index: number) => {
    if (openGroups.includes(index)) {
      setOpenGroups(openGroups.filter((i) => i !== index));
    } else {
      setOpenGroups([...openGroups, index]);
    }
  };

  return (
    <section className="py-16 bg-[#f8fafc] border-t border-neutral-200" id="specs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-white px-3 py-1 rounded-full border border-neutral-200 mb-2">
              <Sliders className="w-3.5 h-3.5" />
              Detailed Specifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Technical Specifications &amp; Compatibility
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Official manufacturer specifications for model SXEZR1V1.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="tel:+18333442286"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00629b] bg-white hover:bg-neutral-50 px-3.5 py-2 rounded-lg border border-neutral-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Specs Help: 1-833-344-2286</span>
            </a>
          </div>
        </div>

        {/* Specifications Accordion List */}
        <div className="space-y-4">
          {groups.map((group, index) => {
            const isOpen = openGroups.includes(index);
            return (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-neutral-900">
                    {group.category}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#00629b]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {group.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-neutral-100/80 gap-1 text-xs sm:text-sm"
                        >
                          <dt className="font-semibold text-neutral-500 sm:w-1/2">
                            {item.label}
                          </dt>
                          <dd className="font-medium text-neutral-900 sm:w-1/2 sm:text-right">
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

