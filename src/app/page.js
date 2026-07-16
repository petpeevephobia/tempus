"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const MapCanvas = dynamic(() => import("../components/MapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen bg-slate-950 flex items-center justify-center">
      <p className="text-emerald-400 font-mono text-sm animate-pulse">Initializing Base Canvas...</p>
    </div>
  ),
});

export default function Home() {
  const [currentYear, setCurrentYear] = useState(1250);
  const [activeLang, setActiveLang] = useState("en"); // English default
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if Info Modal is active

  const formatYear = (year) => {
    if (year < 0) {
      return activeLang === "de" ? `${Math.abs(year)} v. Chr.` : `${Math.abs(year)} BCE`;
    }
    return activeLang === "de" ? `${year} n. Chr.` : `${year} AD`;
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-950">
      
      {/* Map Canvas - Passing the modal state callback */}
      <div className="absolute inset-0 z-0">
        <MapCanvas 
          currentYear={currentYear} 
          onLangChange={setActiveLang} 
          onModalToggle={setIsModalOpen} 
        />
      </div>

      {/* Slider Footer - Fades out elegantly when the modal is open */}
      <footer 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-xl bg-slate-950/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-slate-800/80 flex flex-col gap-2 transition-all duration-300 ${
          isModalOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 pointer-events-auto scale-100"
        }`}
      >
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium tracking-wide">
            {activeLang === "de" ? "Aktive Epoche" : "Active Era"}
          </span>
          <span className="text-emerald-400 font-bold text-lg tracking-wider">
            {formatYear(currentYear)}
          </span>
        </div>
        <input
          type="range"
          min="-50"
          max="1900"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
        />
      </footer>

    </main>
  );
}