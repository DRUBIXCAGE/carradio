"use client";

import React, { useState } from "react";
import { Monitor, Sun, Moon, Radio, Sparkles, Volume2 } from "lucide-react";

export const SplitScreenDemo = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);

  const presets = [
    {
      num: 1,
      ch: "56",
      name: "The Highway",
      category: "Country",
      song: "Fast Car",
      artist: "Luke Combs",
      album: "Gettin' Old",
    },
    {
      num: 2,
      ch: "2",
      name: "The Pulse",
      category: "Pop / Hits",
      song: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
    },
    {
      num: 3,
      ch: "28",
      name: "The Spectrum",
      category: "Classic Rock",
      song: "Wild Child",
      artist: "The Black Keys",
      album: "Dropout Boogie",
    },
    {
      num: 4,
      ch: "36",
      name: "Alt Nation",
      category: "Alt Rock",
      song: "This Is Why",
      artist: "Paramore",
      album: "This Is Why",
    },
  ];

  const currentTrack = presets[selectedPreset];

  return (
    <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-xl overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00629b]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38bdf8] bg-[#00629b]/30 px-3 py-1 rounded-full">
            <Monitor className="w-3.5 h-3.5" />
            Interactive Feature Simulation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            High-Resolution 3.2&quot; Split-Screen Display
          </h3>
          <p className="text-sm text-neutral-400 max-w-xl">
            Experience how the Onyx EZR keeps you informed while you drive.
            See what is currently broadcasting while simultaneously checking what&apos;s on other favorite channels.
          </p>
        </div>

        {/* Display Contrast Toggle */}
        <div className="flex items-center gap-3 bg-neutral-800/80 p-1.5 rounded-xl border border-neutral-700/80 shrink-0">
          <button
            type="button"
            onClick={() => setIsLightMode(false)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              !isLightMode
                ? "bg-[#00629b] text-white shadow-xs"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>White on Black (Night)</span>
          </button>
          <button
            type="button"
            onClick={() => setIsLightMode(true)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isLightMode
                ? "bg-white text-neutral-900 shadow-xs"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <span>Black on White (Day)</span>
          </button>
        </div>
      </div>

      {/* Interactive Display Screen Recreation */}
      <div className="py-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Simulated Radio Screen Frame */}
          <div
            className={`rounded-2xl p-4 sm:p-6 border-4 transition-colors duration-300 shadow-2xl ${
              isLightMode
                ? "bg-white text-neutral-900 border-neutral-300"
                : "bg-[#060c14] text-white border-neutral-800"
            }`}
          >
            {/* Top Bar on Screen */}
            <div
              className={`flex items-center justify-between pb-3 mb-4 border-b text-xs font-bold ${
                isLightMode
                  ? "border-neutral-200 text-neutral-500"
                  : "border-neutral-800 text-neutral-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-1 h-1.5 bg-[#008be2] rounded-xs" />
                  <span className="w-1 h-2.5 bg-[#008be2] rounded-xs" />
                  <span className="w-1 h-3 bg-[#008be2] rounded-xs" />
                </span>
                <span className="uppercase text-[11px] tracking-wide text-[#008be2]">
                  SiriusXM Live
                </span>
              </div>
              <div className="text-[11px] font-mono">12:45 PM</div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <Volume2 className="w-3.5 h-3.5 text-[#008be2]" />
                <span>AUX STEREO</span>
              </div>
            </div>

            {/* Split Screen Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Left Pane: Currently Tuned Station */}
              <div
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  isLightMode
                    ? "bg-neutral-50 border-neutral-200"
                    : "bg-[#0c1524] border-neutral-800"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm bg-[#00629b] text-white">
                      Now Playing
                    </span>
                    <span className="text-xs font-bold text-[#008be2]">
                      CH {currentTrack.ch}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black mb-1">
                    {currentTrack.name}
                  </h4>
                  <div
                    className={`text-xs uppercase font-bold tracking-wider mb-4 ${
                      isLightMode ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    {currentTrack.category}
                  </div>

                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold leading-snug">
                      {currentTrack.song}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isLightMode ? "text-neutral-600" : "text-neutral-300"
                      }`}
                    >
                      {currentTrack.artist}
                    </div>
                    <div
                      className={`text-xs ${
                        isLightMode ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      Album: {currentTrack.album}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-700/30 flex items-center justify-between text-[11px] text-[#008be2] font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    TuneMix Ready
                  </span>
                  <span>Jump: Ready</span>
                </div>
              </div>

              {/* Right Pane: Split-Screen Live Favorites Feed */}
              <div
                className={`p-4 rounded-xl border flex flex-col ${
                  isLightMode
                    ? "bg-neutral-100/70 border-neutral-200"
                    : "bg-[#080d16] border-neutral-800/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isLightMode ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Favorite Channels Feed
                  </span>
                  <span className="text-[10px] text-[#008be2] font-bold">
                    Click to Preview
                  </span>
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  {presets.map((item, idx) => {
                    const isActive = idx === selectedPreset;
                    return (
                      <button
                        key={item.num}
                        type="button"
                        onClick={() => setSelectedPreset(idx)}
                        className={`w-full text-left p-2.5 rounded-lg transition-all flex items-center justify-between gap-2 border cursor-pointer ${
                          isActive
                            ? "bg-[#00629b] text-white border-[#00629b] shadow-xs"
                            : isLightMode
                            ? "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200"
                            : "bg-[#111927] hover:bg-[#182335] text-neutral-200 border-neutral-800"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-black shrink-0 ${
                              isActive
                                ? "bg-white text-[#00629b]"
                                : isLightMode
                                ? "bg-neutral-200 text-neutral-700"
                                : "bg-neutral-800 text-neutral-300"
                            }`}
                          >
                            {item.num}
                          </span>
                          <div className="truncate">
                            <div className="text-xs font-bold truncate">
                              CH {item.ch} • {item.name}
                            </div>
                            <div
                              className={`text-[11px] truncate ${
                                isActive
                                  ? "text-white/80"
                                  : isLightMode
                                  ? "text-neutral-500"
                                  : "text-neutral-400"
                              }`}
                            >
                              {item.song} - {item.artist}
                            </div>
                          </div>
                        </div>

                        {isActive && (
                          <Radio className="w-3.5 h-3.5 text-white shrink-0 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

