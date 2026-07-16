"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";



export default function MapCanvas({ currentYear }) {
  const frankfurtCenter = [50.1109, 8.6821];
  const defaultZoom = 11;

  const [allFeatures, setAllFeatures] = useState([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  const formatYear = (year) => {
    if (year === 9999) return "Still Standing";
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} AD`;
  };

  // 1. Fetch the compiled GeoJSON raw materials on component mount
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

  // 2. Real-time screening logic: filter elements when currentYear or allFeatures changes
  useEffect(() => {
    const filtered = allFeatures.filter((feature) => {
      const { start, end } = feature.properties;
      // Feature is active if the target year is between its build and decommission dates
      return currentYear >= start && currentYear <= end;
    });
    setVisibleFeatures(filtered);
  }, [currentYear, allFeatures]);

  return (
    /* Changing to 'h-screen w-screen' forces the outer wrapper to occupy 
      100% of the viewport width and height, bypassing parent container constraints.
    */
    <div className="relative w-screen h-screen">
      <MapContainer
        center={frankfurtCenter}
        zoom={defaultZoom}
        zoomControl={false}
        // Force the Leaflet canvas itself to fill this viewport wrapper
        style={{ height: "100%", width: "100%" }} 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
  
        {/* Render only the currently active spatial elements */}
        {visibleFeatures.map((feature, idx) => {
          const [longitude, latitude] = feature.geometry.coordinates;
          const { name, start, end, style, description } = feature.properties;
  
          return (
            <Marker key={`${name}-${idx}`} position={[latitude, longitude]}>
              <Popup>
                <div className="text-slate-900 font-sans p-1">
                  <h3 className="font-bold text-sm border-b pb-1 mb-1">{name}</h3>
                  <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider mb-1">
                    Style: {style}
                  </p>
                  <p className="text-xs mb-2 text-slate-700 leading-relaxed">{description}</p>
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