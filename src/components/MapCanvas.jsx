"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMapEvents,
  useMap,
} from "react-leaflet";
import * as turf from "@turf/turf";
import proj4 from "proj4";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// Define EPSG:25832 (ETRS89 / UTM Zone 32N) Proj4 string
proj4.defs(
  "EPSG:25832",
  "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",
);

// Localization Dictionaries
const translations = {
  en: {
    title: "Coordinate Transformation",
    surveyActive: "Surveying: Active",
    surveyIdle: "Field Survey",
    refEllipsoid: "Reference Ellipsoid",
    pointA: "Point A (Start)",
    pointB: "Point B (Target)",
    clickMap: "Click on the map",
    geoDistance: "Geodesic Distance",
    reset: "Reset",
    wgsLabel: "WGS 84 (EPSG:4326)",
    utmLabel: "UTM Zone 32N (EPSG:25832)",
    easting: "Easting (E)",
    northing: "Northing (N)",
    learnMore: "Learn More (External)",
    built: "Built",
    gone: "Gone",
    stillStanding: "Still Standing",
    surveyPtA: "Survey Point A",
    surveyPtB: "Survey Point B",
    resetView: "Reset View (Hessen)",
    aboutTitle: "Tempus",
    aboutDesc:
      "Tempus is an interactive spatiotemporal Web GIS application showcasing the historical evolution of fortifications and defensive works in Hessen from 50 BCE to 1900 AD. Designed to demonstrate modern geomatics, spatial database filtering, and geodesy principles.",
    contactMe: "Talk to the Dev :-)",
    authorDesc: "Based in Frankfurt, Germany",
    close: "Close",
  },
  de: {
    title: "Koordinatentransformation",
    surveyActive: "Feldmessung: Aktiv",
    surveyIdle: "Feldmessung",
    refEllipsoid: "Referenzellipsoid",
    pointA: "Punkt A (Start)",
    pointB: "Punkt B (Ziel)",
    clickMap: "Klicken Sie auf die Karte",
    geoDistance: "Geodätische Distanz",
    reset: "Zurücksetzen",
    wgsLabel: "WGS 84 (EPSG:4326)",
    utmLabel: "UTM Zone 32N (EPSG:25832)",
    easting: "Rechtswert (E)",
    northing: "Hochwert (N)",
    learnMore: "Mehr erfahren (Extern)",
    built: "Erbaut",
    gone: "Zerstört/Ende",
    stillStanding: "Steht Noch",
    surveyPtA: "Messpunkt A",
    surveyPtB: "Messpunkt B",
    resetView: "Ansicht zurücksetzen (Hessen)",
    aboutTitle: "Tempus",
    aboutDesc:
      "Tempus ist eine interaktive raum-zeitliche Web-GIS-Anwendung, die die historische Entwicklung von Befestigungsanlagen und Wehrbauten in Hessen von 50 v. Chr. bis 1900 n. Chr. visualisiert. Entwickelt, um moderne Geomatik, räumliche Datenbankfilterung und Geodäsie-Prinzipien zu demonstrieren.",
    contactMe: "Sprich mit der Entwicklerin :-)",
    authorDesc: "Mit Sitz in Frankfurt, Deutschland",
    close: "Schließen",
  },
};

// Helper to format BCE/AD Years depending on Language
const formatYear = (year, lang) => {
  if (year === 9999) return translations[lang].stillStanding;
  if (year < 0) {
    return lang === "de"
      ? `${Math.abs(year)} v. Chr.`
      : `${Math.abs(year)} BCE`;
  }
  return lang === "de" ? `${year} n. Chr.` : `${year} AD`;
};

// Map Interactivity Handler Component
function MapEventHandler({ activeSurvey, onMapClick, onMouseMove }) {
  useMapEvents({
    click(e) {
      if (activeSurvey) {
        onMapClick([e.latlng.lat, e.latlng.lng]);
      }
    },
    mousemove(e) {
      onMouseMove(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

// Map View Controller Component
function MapViewManager({ triggerReset, onResetComplete }) {
  const map = useMap();

  // Exact geographic bounding box (BBox) of the Hessen state:
  // [[Southernmost Lat, Westernmost Lng], [Northernmost Lat, Easternmost Lng]]
  const hessenBounds = [
    [49.39, 7.77], // Southwest corner (near Neckarsteinach/Lorch)
    [51.65, 10.24], // Northeast corner (near Karlshafen/Tann)
  ];

  useEffect(() => {
    if (triggerReset) {
      // flyToBounds auto-calculates the perfect zoom and center for the user's screen size
      map.flyToBounds(hessenBounds, {
        animate: true,
        duration: 1.5, // 1.5 seconds smooth transition
        padding: [30, 30], // Adds a clean 30px buffer so Hessen doesn't touch the screen edges
      });
      onResetComplete(); // Reset the trigger state
    }
  }, [triggerReset, map, onResetComplete]);

  return null;
}

export default function MapCanvas({
  currentYear,
  onLangChange,
  onModalToggle,
}) {
  const frankfurtCenter = [50.1109, 8.6821];
  const defaultZoom = 11;

  // Modify your setInfoOpen triggers to notify the parent layout
  const handleOpenModal = () => {
    setInfoOpen(true);
    if (onModalToggle) onModalToggle(true);
  };

  const handleCloseModal = () => {
    setInfoOpen(false);
    if (onModalToggle) onModalToggle(false);
  };

  // Language State
  const [lang, setLang] = useState("en"); // English default
  const handleLangSelect = (newLang) => {
    setLang(newLang); // Updates the local state in MapCanvas
    if (onLangChange) {
      onLangChange(newLang); // Alerts page.js so the timeline at the bottom translates too!
    }
  };

  // Reset map view state
  const [resetViewport, setResetViewport] = useState(false);

  // Info button state
  const [infoOpen, setInfoOpen] = useState(false);

  // Active monuments data
  const [allFeatures, setAllFeatures] = useState([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  // Geomatic "Feldmessung" States
  const [surveyMode, setSurveyMode] = useState(false);
  const [points, setPoints] = useState([]);
  const [geodesicDistance, setGeodesicDistance] = useState(null);

  // Coordinate Transformer States (Dynamic Cursor Tracking)
  const [coordsWGS84, setCoordsWGS84] = useState({ lat: 50.1109, lng: 8.6821 });
  const [coordsUTM, setCoordsUTM] = useState({ easting: 0, northing: 0 });

  const t = translations[lang];

  // 1. Fetch GeoJSON
  useEffect(() => {
    fetch("/monuments.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch spatial dataset.");
        return res.json();
      })
      .then((data) => {
        setAllFeatures(data.features || []);
      })
      .catch((err) => console.error("Error loading geodata:", err));
  }, []);

  // 2. Filter Active Features by Timeline Year
  useEffect(() => {
    const filtered = allFeatures.filter((feature) => {
      const { start, end } = feature.properties;
      return currentYear >= start && currentYear <= end;
    });
    setVisibleFeatures(filtered);
  }, [currentYear, allFeatures]);

  // 3. Handle Geodetic Distance Click Calculation
  const handleMapClick = (latlng) => {
    if (points.length < 2) {
      const updatedPoints = [...points, latlng];
      setPoints(updatedPoints);

      if (updatedPoints.length === 2) {
        const p1 = turf.point([updatedPoints[0][1], updatedPoints[0][0]]);
        const p2 = turf.point([updatedPoints[1][1], updatedPoints[1][0]]);
        const distanceKm = turf.distance(p1, p2, { units: "kilometers" });
        setGeodesicDistance(distanceKm);
      }
    } else {
      setPoints([latlng]);
      setGeodesicDistance(null);
    }
  };

  const resetSurvey = () => {
    setPoints([]);
    setGeodesicDistance(null);
  };

  // 4. Real-time Coordinate Transformation
  const handleMouseMove = (lat, lng) => {
    setCoordsWGS84({ lat, lng });

    const [easting, northing] = proj4("EPSG:25832", [lng, lat]);
    setCoordsUTM({ easting, northing });
  };

  return (
    <div className="relative w-full h-full">
      {/* INFO/ABOUT MODAL OVERLAY */}
      {infoOpen && (
        <div
          style={{ zIndex: 100000, animationDuration: "300ms" }}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            style={{ animationDuration: "250ms" }}
            className="bg-slate-950 border border-slate-800/80 max-w-md w-full p-6 rounded-2xl shadow-2xl text-slate-300 font-sans flex flex-col gap-4 relative animate-fadeIn"
          >
            {/* Top Right Close "X" Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition-all duration-200"
              aria-label={t.close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header (Slightly padded right so it doesn't collide with the X) */}
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3 pr-8">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-100 leading-tight">
                  {t.aboutTitle}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.aboutDesc}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-0.5">
                {t.contactMe}
              </span>

              {/* Profile & Social Row */}
              <div className="flex flex-col md:flex-row items-center justify-between rounded-xl">
                {/* Left: Avatar & Name */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="relative">
                    {/* Dynamic Profile Picture from GitHub */}
                    <img
                      src="https://github.com/petpeevephobia.png"
                      alt="Nadra Mohamed Sah"
                      className="w-8 h-8 rounded-full border border-slate-700/80 object-cover shadow-sm bg-slate-900"
                      onError={(e) => {
                        e.target.src =
                          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-slate-200">
                      Nadra Mohamed Sah
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium leading-none">
                      {t.authorDesc}
                    </span>
                  </div>
                </div>

                {/* Right: Minimalist Social Icons Row */}
                <div className="flex items-center gap-2.5 pr-1">
                  {/* Email */}
                  <a
                    href="mailto:qamaria.mdsah@gmail.com"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-200"
                    title="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/nadraqamaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/nadraqamaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-200"
                    title="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/petpeevephobia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-all duration-200"
                    title="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEFT SIDEBAR: FIELD MEASUREMENT (Feldmessung) */}
      <div className="absolute top-4 left-4 z-[999] flex flex-col gap-2">
        <button
          onClick={() => {
            setSurveyMode(!surveyMode);
            resetSurvey();
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
            surveyMode
              ? "bg-emerald-500 text-slate-950 border-emerald-400"
              : "bg-slate-950/90 text-slate-200 border-slate-800 hover:bg-slate-900"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"
            />
          </svg>
          {surveyMode ? t.surveyActive : t.surveyIdle}
        </button>

        {surveyMode && (
          <div className="bg-slate-950/95 backdrop-blur-md border border-slate-800/80 p-4 rounded-xl shadow-2xl w-64 text-slate-300 font-sans text-xs flex flex-col gap-2 animate-fadeIn">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">{t.refEllipsoid}:</span>
              <span className="font-mono text-emerald-400 font-bold">
                WGS 84
              </span>
            </div>

            <div className="flex flex-col gap-1.5 py-1">
              <div className="flex justify-between">
                <span>{t.pointA}:</span>
                <span className="font-mono text-slate-400">
                  {points[0]
                    ? `${points[0][0].toFixed(4)}°, ${points[0][1].toFixed(4)}°`
                    : t.clickMap}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t.pointB}:</span>
                <span className="font-mono text-slate-400">
                  {points[1]
                    ? `${points[1][0].toFixed(4)}°, ${points[1][1].toFixed(4)}°`
                    : t.clickMap}
                </span>
              </div>
            </div>

            {geodesicDistance !== null && (
              <div className="border-t border-slate-800/80 pt-2 mt-1">
                <span className="text-slate-400 block mb-0.5">
                  {t.geoDistance}:
                </span>
                <div className="text-xl font-bold text-emerald-400 font-mono tracking-wide">
                  {geodesicDistance.toFixed(3)} km
                </div>
              </div>
            )}

            <button
              onClick={resetSurvey}
              className="mt-2 text-center text-[10px] uppercase font-bold tracking-wider text-rose-400 hover:text-rose-300 transition-colors bg-rose-950/20 py-1 rounded"
            >
              {t.reset}
            </button>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: DYNAMIC COORDINATE TRANSFORMER & LANGUAGE SELECTOR */}
      <div className="absolute top-4 right-4 z-[999] flex flex-col gap-2.5 items-end">
        {/* 1. MOBILE-ONLY VIEW: VERTICAL FLOATING ICON BUTTONS (Hidden on Desktop) */}
        <div className="flex md:hidden flex-col gap-2">
          {/* Info Icon Button */}
          <button
            onClick={handleOpenModal}
            className="w-10 h-10 rounded-full bg-slate-950/95 backdrop-blur-md border border-slate-800/80 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all flex items-center justify-center shadow-lg"
            title={t.aboutTitle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </button>

          {/* Language Toggle Icon Button (Toggles EN/DE on click) */}
          <button
            onClick={() => handleLangSelect(lang === "en" ? "de" : "en")}
            className="w-10 h-10 rounded-full bg-slate-950/95 backdrop-blur-md border border-slate-800/80 text-emerald-400 hover:text-emerald-300 font-sans text-xs font-bold transition-all flex items-center justify-center shadow-lg"
            title={lang === "en" ? "Switch to German" : "Auf Englisch wechseln"}
          >
            {lang.toUpperCase()}
          </button>
        </div>

        {/* 2. DESKTOP VIEW: FULL DYNAMIC COORDINATE TRANSFORMER PANEL (Hidden on Mobile) */}
        <div className="hidden md:flex bg-slate-950/95 backdrop-blur-md border border-slate-800/80 p-4 rounded-xl shadow-2xl w-72 text-slate-300 font-sans text-xs flex-col gap-2.5">
          {/* Top Header holding details */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-emerald-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
                />
              </svg>
              <span className="font-bold tracking-wide text-slate-200">
                {t.title}
              </span>
            </div>
          </div>

          {/* WGS84 Section */}
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
              {t.wgsLabel}
            </span>
            <div className="grid grid-cols-2 gap-1 mt-1 font-mono text-[11px] bg-slate-900/50 p-2 rounded-lg border border-slate-800/40">
              <div>
                Lat:{" "}
                <span className="text-emerald-400">
                  {coordsWGS84.lat.toFixed(6)}°
                </span>
              </div>
              <div>
                Lng:{" "}
                <span className="text-emerald-400">
                  {coordsWGS84.lng.toFixed(6)}°
                </span>
              </div>
            </div>
          </div>

          {/* UTM Section */}
          <div>
            <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
              {t.utmLabel}
            </span>
            <div className="grid grid-cols-1 gap-1 mt-1 font-mono text-[11px] bg-slate-900/50 p-2 rounded-lg border border-slate-800/40">
              <div className="flex justify-between">
                <span>{t.easting}:</span>
                <span className="text-emerald-400">
                  {coordsUTM.easting.toFixed(2)} m
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t.northing}:</span>
                <span className="text-emerald-400">
                  {coordsUTM.northing.toFixed(2)} m
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Utilities Row */}
          <div className="flex items-center gap-2 mt-1 pt-2 border-t border-slate-800/80">
            {/* Info Icon */}
            <button
              onClick={handleOpenModal}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all flex items-center justify-center aspect-square"
              title={t.aboutTitle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </button>

            {/* Segmented Lang Selector */}
            <div className="flex flex-1 rounded-lg bg-slate-900 border border-slate-800 p-0.5">
              <button
                onClick={() => handleLangSelect("en")}
                className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${
                  lang === "en"
                    ? "bg-emerald-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLangSelect("de")}
                className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${
                  lang === "de"
                    ? "bg-emerald-500 text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM-LEFT: RESET TO HESSEN MAP VIEW BUTTON */}
      <div className="absolute bottom-32 left-4 z-[999]">
        <button
          onClick={() => setResetViewport(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-950/90 text-slate-200 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 shadow-lg font-sans text-xs font-semibold tracking-wide transition-all duration-300"
          title={t.resetView}
        >
          {/* Hessen / Map Reset Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-emerald-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
          {t.resetView}
        </button>
      </div>

      <MapContainer
        center={frankfurtCenter}
        zoom={defaultZoom}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Viewport Reset Controller */}
        <MapViewManager
          triggerReset={resetViewport}
          onResetComplete={() => setResetViewport(false)}
        />

        <MapEventHandler
          activeSurvey={surveyMode}
          onMapClick={handleMapClick}
          onMouseMove={handleMouseMove}
        />

        {/* Render Geodesic Survey Points */}
        {points.map((point, index) => (
          <Marker key={`survey-pt-${index}`} position={point}>
            <Popup>
              <span className="font-sans font-bold text-xs text-slate-800">
                {index === 0 ? t.surveyPtA : t.surveyPtB}
              </span>
            </Popup>
          </Marker>
        ))}

        {/* Render Geodesic Path Line */}
        {points.length === 2 && (
          <Polyline
            positions={points}
            pathOptions={{
              color: "#10b981",
              weight: 3,
              dashArray: "8, 8",
              className: "animate-dash",
            }}
          />
        )}

        {/* Render visible timeline monuments */}
        {visibleFeatures.map((feature, idx) => {
          const [longitude, latitude] = feature.geometry.coordinates;
          const { name, start, end, style, description, url } =
            feature.properties;

          const activeUrl =
            url ||
            `https://de.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(name)}`;

          return (
            <Marker key={`${name}-${idx}`} position={[latitude, longitude]}>
              <Popup>
                <div className="text-slate-900 font-sans p-1 w-64">
                  <h3 className="font-bold text-sm border-b pb-1 mb-1">
                    {name}
                  </h3>

                  <p className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider mb-1">
                    Style: {style}
                  </p>

                  <p className="text-xs mb-3 text-slate-700 leading-relaxed">
                    {description}
                    {activeUrl && (
                      <a
                        href={activeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-0.5 text-emerald-600 hover:text-emerald-500 font-bold text-[10px] tracking-wide uppercase underline transition-colors"
                      >
                        {t.learnMore}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-3 h-3 inline"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    )}
                  </p>

                  <div className="flex justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-100 font-mono">
                    <span>
                      {t.built}: {formatYear(start, lang)}
                    </span>
                    <span>
                      {t.gone}: {formatYear(end, lang)}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
