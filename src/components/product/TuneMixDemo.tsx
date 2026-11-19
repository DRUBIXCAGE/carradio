"use client";

import React, { useState } from "react";
import { Sliders, Sparkles, Music, Play, RotateCcw, Check } from "lucide-react";

export const TuneMixDemo = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    "highway",
    "spectrum",
    "pulse",
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const availableChannels = [
    {
      id: "highway",
      name: "The Highway",
      ch: "56",
      genre: "Country",
      color: "#f59e0b",
      track: { title: "Fast Car", artist: "Luke Combs" },
    },
    {
      id: "pulse",
      name: "The Pulse",
      ch: "2",
      genre: "Pop Hits",
      color: "#ec4899",
      track: { title: "Anti-Hero", artist: "Taylor Swift" },
    },
    {
      id: "spectrum",
      name: "The Spectrum",
      ch: "28",
      genre: "Rock",
      color: "#008be2",
      track: { title: "Wild Child", artist: "The Black Keys" },
    },
    {
      id: "alt",
      name: "Alt Nation",
      ch: "36",
      genre: "Alternative",
      color: "#10b981",
      track: { title: "This Is Why", artist: "Paramore" },
    },
    {
      id: "lithium",
      name: "Lithium",
      ch: "34",
      genre: "90s Grunge",
      color: "#8b5cf6",
      track: { title: "Everlong", artist: "Foo Fighters" },
    },
    {
      id: "bpm",
      name: "BPM",
      ch: "51",
      genre: "Electronic",
      color: "#06b6d4",
      track: { title: "Miracle", artist: "Calvin Harris & Ellie Goulding" },
    },
  ];

  const toggleChannel = (id: string) => {
    if (selectedChannels.includes(id)) {
      if (selectedChannels.length > 2) {
        setSelectedChannels(selectedChannels.filter((c) => c !== id));
      }
    } else {
      setSelectedChannels([...selectedChannels, id]);
    }
  };

  const activeTracks = availableChannels.filter((c) =>
    selectedChannels.includes(c.id)
  );

  const currentMixTrack = activeTracks[currentSongIndex % activeTracks.length];

  const nextTrack = () => {
    setCurrentSongIndex((prev) => (prev + 1) % activeTracks.length);
  };

  return (
    <div className="bg-[#f0f7fc] border border-[#d0e5f5] rounded-3xl p-6 sm:p-10 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Explanation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00629b] bg-white px-3 py-1 rounded-full border border-[#b8daf2] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#008be2]" />
            Exclusive Feature
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            TuneMix™ — Your Custom Music Channel
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Can&apos;t decide between modern country, alternative rock, or pop hits?
            TuneMix™ blends your favorite music channels into one uninterrupted,
            commercial-free stream. Select your top channels below to see how it works!
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Select 2 to 6 favorite channels to mix:
            </span>
            <div className="flex flex-wrap gap-2">
              {availableChannels.map((ch) => {
                const isSelected = selectedChannels.includes(ch.id);
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => toggleChannel(ch.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#002b49] text-white border-[#002b49] shadow-xs"
                        : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-[#38bdf8]" />}
                    <span>
                      CH {ch.ch} {ch.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Interactive Player */}
        <div className="lg:col-span-7">
          <div className="bg-[#001f36] text-white rounded-2xl p-6 border border-[#00365c] shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-[#38bdf8]" />
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  TuneMix Live Stream
                </span>
              </div>
              <span className="text-xs text-[#38bdf8] font-semibold bg-[#003c66] px-2.5 py-0.5 rounded-full">
                {selectedChannels.length} Channels Mixed
              </span>
            </div>

            {/* Now Playing from Channel */}
            <div className="py-6 text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#00385c] text-white text-xs font-bold px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Playing from CH {currentMixTrack?.ch} • {currentMixTrack?.name} ({currentMixTrack?.genre})
              </div>

              <div className="text-2xl sm:text-3xl font-black text-white">
                {currentMixTrack?.track.title}
              </div>
              <div className="text-base text-neutral-300 font-medium">
                {currentMixTrack?.track.artist}
              </div>

              {/* Animated Audio Equalizer Bars */}
              <div className="flex items-center justify-center gap-1.5 h-8 pt-2">
                {[12, 24, 18, 30, 16, 28, 20, 14, 26, 18, 22].map((height, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-[#008be2] rounded-full transition-all duration-300 animate-pulse"
                    style={{
                      height: `${height}px`,
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controller Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Next up in mix:{" "}
                <strong className="text-white">
                  {
                    activeTracks[
                      (currentSongIndex + 1) % activeTracks.length
                    ]?.track.title
                  }
                </strong>
              </div>

              <button
                type="button"
                onClick={nextTrack}
                className="flex items-center gap-2 bg-[#008be2] hover:bg-[#0073d1] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Next Song in Mix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

