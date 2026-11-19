"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ThumbsUp, MessageSquare, Filter } from "lucide-react";
import { Review } from "@/types/product";
import { customerReviews } from "@/data/reviewsData";

export const CustomerReviews = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(customerReviews);
  const [filter, setFilter] = useState<"all" | "5star" | "verified">("all");
  const [helpfulMap, setHelpfulMap] = useState<Record<string, boolean>>({});

  const handleHelpful = (id: string) => {
    if (helpfulMap[id]) return;
    setHelpfulMap((prev) => ({ ...prev, [id]: true }));
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const filteredReviews = reviewsList.filter((r) => {
    if (filter === "5star") return r.rating === 5;
    if (filter === "verified") return r.verified;
    return true;
  });

  return (
    <section className="py-16 bg-[#f8fafc] border-t border-neutral-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-white px-3 py-1 rounded-full border border-neutral-200 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Verified Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            Customer Reviews &amp; Ratings
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Real feedback from drivers who installed the Onyx EZR in their vehicles.
          </p>
        </div>

        {/* Rating Breakdown Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 mb-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Big Score */}
            <div className="lg:col-span-4 text-center lg:border-r border-neutral-200 lg:pr-8">
              <div className="text-5xl sm:text-6xl font-black text-neutral-900 tracking-tight">
                4.8
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-neutral-500 font-semibold">
                Based on 3,428 verified ratings
              </p>
              <div className="mt-3 text-xs text-emerald-700 font-bold bg-emerald-50 py-1 px-3 rounded-full inline-block border border-emerald-200">
                97% of drivers recommend this radio
              </div>
            </div>

            {/* Rating Bars */}
            <div className="lg:col-span-8 space-y-2.5">
              {[
                { stars: "5 Stars", pct: 86, count: "2,948" },
                { stars: "4 Stars", pct: 10, count: "342" },
                { stars: "3 Stars", pct: 2, count: "68" },
                { stars: "2 Stars", pct: 1, count: "34" },
                { stars: "1 Star", pct: 1, count: "36" },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-16 font-bold text-neutral-600 text-right">
                    {item.stars}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-neutral-400 font-medium">
                    {item.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-neutral-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Filter By:
            </span>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-[#002b49] text-white"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              All Reviews
            </button>
            <button
              type="button"
              onClick={() => setFilter("5star")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filter === "5star"
                  ? "bg-[#002b49] text-white"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              5 Stars Only
            </button>
            <button
              type="button"
              onClick={() => setFilter("verified")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filter === "verified"
                  ? "bg-[#002b49] text-white"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              Verified Buyers
            </button>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-neutral-900">
                      {rev.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                    <span className="font-semibold text-neutral-800">{rev.author}</span>
                    {rev.location && <span>• {rev.location}</span>}
                    <span>• {rev.date}</span>
                  </div>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Purchaser
                  </span>
                )}
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                &ldquo;{rev.comment}&rdquo;
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => handleHelpful(rev.id)}
                  disabled={helpfulMap[rev.id]}
                  className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                    helpfulMap[rev.id]
                      ? "text-emerald-600 font-bold"
                      : "hover:text-[#00629b]"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>
                    {helpfulMap[rev.id]
                      ? "Thank you!"
                      : `Helpful (${rev.helpfulCount})`}
                  </span>
                </button>

                <span className="text-[11px] text-neutral-400">
                  Vehicle DIY Installation Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

