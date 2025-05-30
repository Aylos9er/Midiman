"use client";

import React, { useState } from "react";

const MidiStation = () => {
  const [activeTiles, setActiveTiles] = useState<number[]>([]);

  const toggleTile = (index: number) => {
    setActiveTiles((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const tiles = Array.from({ length: 9 }, (_, i) => i);

  return (
    <section className="bg-chart-bg rounded-lg p-6 max-w-4xl mx-auto border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">MIDI Station</h2>
      <div className="grid grid-cols-3 gap-6 p-6">
        {tiles.map((tile) => (
          <button
            key={tile}
            onClick={() => toggleTile(tile)}
            className={`aspect-square rounded-lg transition-all duration-300 text-lg font-medium shadow-lg min-h-[100px] ${
              activeTiles.includes(tile)
                ? "bg-white text-black scale-95 border-2 border-white"
                : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 border border-white/20"
            }`}
            aria-pressed={activeTiles.includes(tile)}
            aria-label={`MIDI control tile ${tile + 1}`}
          >
            Tile {tile + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MidiStation;
