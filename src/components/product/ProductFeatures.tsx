import React from "react";
import Image from "next/image";
import {
  Monitor,
  Sparkles,
  Zap,
  Wrench,
  Volume2,
  Lock,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const ProductFeatures = () => {
  const featureList = [
    {
      icon: Monitor,
      title: "3.2\" High-Resolution Display",
      description:
        "Large, crisp screen makes it simple to read artist names, song titles, and channel details at a glance. Supports white text on black or black text on white for daylight and nighttime driving.",
    },
    {
      icon: Sparkles,
      title: "Split-Screen Browsing",
      description:
        "View what's playing on other favorite channels while remaining locked on your current station. Browse channel lineups without interrupting your listening.",
    },
    {
      icon: Layers,
      title: "TuneMix™ Blended Music",
      description:
        "Create a custom listening experience by blending songs from your favorite music channels. Hear an uninterrupted mix curated to your exact musical tastes.",
    },
    {
      icon: Zap,
      title: "One-Touch Jump™",
      description:
        "Quickly toggle right back to the previous channel you were listening to with a single button press. Never miss breaking news, game scores, or traffic updates.",
    },
    {
      icon: Wrench,
      title: "Do-It-Yourself Vehicle Installation",
      description:
        "Installs easily into any car, truck, or SUV. Connect using the included 3.5mm Aux-In cable, or transmit wirelessly through your FM radio via PowerConnect™ technology.",
    },
    {
      icon: Volume2,
      title: "10 Dedicated Channel Presets",
      description:
        "Store up to 10 of your favorite satellite stations with dedicated physical 0-9 buttons on the front panel for rapid, safe one-touch tuning while on the road.",
    },
    {
      icon: Lock,
      title: "Parental Controls",
      description:
        "Easily lock and unlock channels containing mature content with a private passcode to ensure family-friendly listening.",
    },
    {
      icon: CheckCircle2,
      title: "Dock & Play Compatibility",
      description:
        "Easily transfer the Onyx EZR receiver between your vehicle, home stereo, office desktop, or portable boombox using one single subscription.",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-neutral-200" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-[#e8f3fb] px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Advanced Radio Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Designed for the Ultimate Driving Audio Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            The Onyx EZR pairs SiriusXM&apos;s celebrated channel lineup with intuitive hardware
            controls engineered specifically for effortless vehicle operation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#f8fafc] border border-neutral-200/90 hover:border-[#00629b]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#00629b] shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Installation Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-[#002b49] text-white">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#38bdf8]">
              Simple 3-Step Setup
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Install in Your Vehicle in Under 20 Minutes
            </h3>
            <p className="text-sm text-neutral-300 mt-2">
              No cutting wires, no professional mechanic required. Everything you need is included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#001f36] border border-[#00385f]">
              <div className="text-2xl font-black text-[#38bdf8] mb-2">01</div>
              <h4 className="text-base font-bold text-white mb-1">Mount Dock</h4>
              <p className="text-xs text-neutral-300">
                Attach the PowerConnect cradle to your car dashboard with the adhesive plate or clip it onto your air vent slats.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#001f36] border border-[#00385f]">
              <div className="text-2xl font-black text-[#38bdf8] mb-2">02</div>
              <h4 className="text-base font-bold text-white mb-1">Route Antenna</h4>
              <p className="text-xs text-neutral-300">
                Place the magnetic antenna puck onto your vehicle roof and tuck the micro-cable neatly along the rubber weatherstripping.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#001f36] border border-[#00385f]">
              <div className="text-2xl font-black text-[#38bdf8] mb-2">03</div>
              <h4 className="text-base font-bold text-white mb-1">Connect Audio &amp; Power</h4>
              <p className="text-xs text-neutral-300">
                Plug the power adapter into your 12V socket and connect audio via 3.5mm Aux-In or match FM frequencies. Done!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

