"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const NewsletterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterFormData) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <section className="py-14 bg-[#001f36] text-white border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-[#00629b]/40 border border-[#00629b] flex items-center justify-center mx-auto text-[#38bdf8]">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Stay in Tune with Exclusive Offers
          </h2>
          <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive insider satellite radio discounts, new channel lineup
            updates, and seasonal bundle promotions directly from Car FM Radio (carfmradio.com).
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm font-bold flex items-center justify-center gap-2 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing! Check your inbox soon.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5"
          >
            <div className="flex-1 text-left">
              <input
                type="email"
                placeholder="Enter your email address..."
                {...register("email")}
                className="w-full bg-[#002b49] text-sm text-white placeholder-neutral-400 px-4 py-3 rounded-xl border border-[#004f7c] focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8]/20 outline-hidden transition-all"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#008be2] hover:bg-[#0073d1] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
          <Shield className="w-3.5 h-3.5 text-neutral-500" />
          <span>We respect your privacy. No spam, ever. Unsubscribe at any time.</span>
        </div>
      </div>
    </section>
  );
};

