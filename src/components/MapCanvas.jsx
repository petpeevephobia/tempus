"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import * as turf from "@turf/turf";
import proj4 from "proj4";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// Define EPSG:25832 (ETRS89 / UTM Zone 32N) Proj4 string
proj4.defs(
  "EPSG:25832",
  "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
);

// Helper to format BCE/AD Years
const formatYear = (year) => {
  if (year === 9999) return "Still Standing";
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} AD`;
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
    }
  });
  return null;
}

export default function MapCanvas({ currentYear }) {
  const frankfurtCenter = [50.1109, 8.6821];
  const defaultZoom = 11;

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
          </svg>
          {surveyMode ? "Feldmessung: Aktiv" : "Feldmessung"}
        </button>

        {surveyMode && (
          <div className="bg-slate-950/95 backdrop-blur-md border border-slate-800/80 p-4 rounded-xl shadow-2xl w-64 text-slate-300 font-sans text-xs flex flex-col gap-2 animate-fadeIn">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Referenzellipsoid:</span>
              <span className="font-mono text-emerald-400 font-bold">WGS 84</span>
            </div>
            
            <div className="flex flex-col gap-1.5 py-1">
              <div className="flex justify-between">
                <span>Punkt A:</span>
                <span className="font-mono text-slate-400">
                  {points[0] ? `${points[0][0].toFixed(4)}°, ${points[0][1].toFixed(4)}°` : "Karte anklicken"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Punkt B:</span>
                <span className="font-mono text-slate-400">
                  {points[1] ? `${points[1][0].toFixed(4)}°, ${points[1][1].toFixed(4)}°` : "Karte anklicken"}
                </span>
              </div>
            </div>

            {geodesicDistance !== null && (
              <div className="border-t border-slate-800/80 pt-2 mt-1">
                <span className="text-slate-400 block mb-0.5">Geodätische Distanz:</span>
                <div className="text-xl font-bold text-emerald-400 font-mono tracking-wide">
                  {geodesicDistance.toFixed(3)} km
                </div>
              </div>
            )}

            <button
              onClick={resetSurvey}
              className="mt-2 text-center text-[10px] uppercase font-bold tracking-wider text-rose-400 hover:text-rose-300 transition-colors bg-rose-950/20 py-1 rounded"
            >
              Zurücksetzen
            </button>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: DYNAMIC COORDINATE TRANSFORMER */}
      <div className="absolute top-4 right-4 z-[999] bg-slate-950/95 backdrop-blur-md border border-slate-800/80 p-4 rounded-xl shadow-2xl w-72 text-slate-300 font-sans text-xs flex flex-col gap-2.5">
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
          </svg>
          <span className="font-bold tracking-wide text-slate-200">Koordinatentransformation</span>
        </div>

        <div>
          <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">WGS 84 (EPSG:4326)</span>
          <div className="grid grid-cols-2 gap-1 mt-1 font-mono text-[11px] bg-slate-900/50 p-2 rounded-lg border border-slate-800/40">
            <div>Lat: <span className="text-emerald-400">{coordsWGS84.lat.toFixed(6)}°</span></div>
            <div>Lng: <span className="text-emerald-400">{coordsWGS84.lng.toFixed(6)}°</span></div>
          </div>
        </div>

        <div>
          <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">UTM Zone 32N (EPSG:25832)</span>
          <div className="grid grid-cols-1 gap-1 mt-1 font-mono text-[11px] bg-slate-900/50 p-2 rounded-lg border border-slate-800/40">
            <div className="flex justify-between">
              <span>Easting (E):</span>
              <span className="text-emerald-400">{coordsUTM.easting.toFixed(2)} m</span>
            </div>
            <div className="flex justify-between">
              <span>Northing (N):</span>
              <span className="text-emerald-400">{coordsUTM.northing.toFixed(2)} m</span>
            </div>
          </div>
        </div>
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
                {index === 0 ? "Punkt A" : "Punkt B"}
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
              className: "animate-dash" 
            }} 
          />
        )}

        {/* Render visible timeline monuments */}
        {visibleFeatures.map((feature, idx) => {
          const [longitude, latitude] = feature.geometry.coordinates;
          const { name, start, end, style, description, url } = feature.properties;
          // If no explicit URL is in the database, auto-generate a fallback Wikipedia search link
          const activeUrl = url || `https://de.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(name)}`;

          return (
            <Marker key={`${name}-${idx}`} position={[latitude, longitude]}>
              <Popup>
                <div className="text-slate-900 font-sans p-1 w-64">
                  <h3 className="font-bold text-sm border-b pb-1 mb-1">{name}</h3>
                  
                  <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider mb-1">
                    Style: {style}
                  </p>
                  
                  <p className="text-xs mb-3 text-slate-700 leading-relaxed">
                    {description}
                  </p>

                  {/* This will now ALWAYS render because activeUrl is guaranteed to exist */}
                  {activeUrl && (
                  <a 
                      href={activeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full bg-slate-900 hover:bg-emerald-600 text-white hover:text-slate-950 font-bold text-[10px] tracking-wide uppercase py-1.5 px-3 rounded-lg mb-2.5 transition-all duration-200"
                  >
                      Mehr erfahren (Extern)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                  </a>
                  )}

                  <div className="flex justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-100 font-mono">
                    <span>Built: {formatYear(start)}</span>
                    <span>Gone: {formatYear(end)}</span>
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