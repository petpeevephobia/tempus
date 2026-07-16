# Tempus (Hessen Historica)

An interactive, spatiotemporal Web GIS application designed to visualize the evolution of historical fortifications, castles, and defensive walls in Frankfurt am Main and the surrounding Hessen region.

This project demonstrates the core competencies required of a modern **Geomatiker** or **Geoinformatiker**, bridging the gap between traditional geodesy, chronological database queries, and modern web-based cartography.

---

## Live Demo

🔗 [https://tempus-azure.vercel.app/](https://tempus-azure.vercel.app/)

---

## Project Overview & Objective

The objective of **Tempus** is to show how historical spatial-temporal datasets can be visualized dynamically. Rather than relying on static paper maps, this application allows users to slide through centuries of history (from **50 BCE** to **1900 AD**) to see defensive landmarks appear, change, and disappear in real-time as the geopolitical landscape of Frankfurt evolved.

### Geomatics Competencies Demonstrated:

* **Spatiotemporal Data Management:** Handling spatial features dynamically linked to timeline attributes (start/end dates).
* **Geodesy & Ellipsoidal Math:** Calculating true great-circle (geodesic) distances on the WGS 84 ellipsoid rather than flat 2D map projections.
* **Coordinate Systems & Transformations:** Dynamic real-time coordinate transformations between global geographic datums and localized projected grid systems used in German state surveying.
* **Cartographic Design:** Designing a custom, highly legible, dark-themed base map that emphasizes thematic vector overlays for optimal user experience.

---

## Tech Stack

* **Frontend Framework:** Next.js (React) & Tailwind CSS
* **Mapping Library:** Leaflet & React-Leaflet
* **Geospatial Processing Libraries:** * **Proj4js** (For real-time Coordinate Reference System transformations)
* **Turf.js** (For geodesic distance calculations)


* **Data Format:** GeoJSON (RFC 7946 Standard)
* **Data Pipeline:** Python (for raw coordinate preparation and attribute joining)

---

## Data Structure (GeoJSON Schema)

The core dataset (`monuments.json`) uses a strictly validated GeoJSON format. Each feature contains spatial geometries mapped alongside chronological attributes:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6821, 50.1109]
      },
      "properties": {
        "name": "Kaiserpfalz Franconofurd",
        "start": 843,
        "end": 1250,
        "style": "Carolingian",
        "description": "The historical heart of early Frankfurt. Emperor Charlemagne's seat of power.",
        "url": "https://www.frankfurt-tourismus.de/Entdecken-Und-Erleben/Sehenswuerdigkeiten/Kaiserpfalz-franconofurd"
      }
    }
  ]
}

```

---

## Key Features Implemented

### 1. Interactive Timeline Slider (50 BCE – 1900 AD)

* A custom slider interface filtering live geographic features across a range starting in the early Roman era (**50 BCE**) up to the industrial era (**1900 AD**).
* Handles complex chronological conversions (formatting negative integers cleanly as "BCE" and positive integers as "AD" inside both the timeline display and map popups).
* Markers dynamically mount and unmount from the Leaflet canvas depending on the selected year state.

### 2. Geomatiker Twist: The "Feldmessung" (Field Measurement) Tool

* A mock field-surveying simulator allowing users to compute true distance between historical landmarks.
* **How it works:** Activating the tool allows the user to click any two points on the map. The app draws an animated, dashed geodesic line connecting them.
* **The Science:** The tool bypasses flat 2D map calculations and computes the true ellipsoidal great-circle distance on the **WGS 84** ellipsoid using **Turf.js**, displaying the output with millimeter precision (e.g., `12.427 km`).

### 3. Real-Time Coordinate Transformer Panel

* A dynamic tracking widget displaying the exact coordinates of the user's mouse cursor across two key Spatial Reference Systems:
* **WGS 84 (Decimal Degrees / EPSG:4326):** The global standard for web maps and GPS.
* **UTM Zone 32N (Easting/Northing / EPSG:25832):** The official projected coordinate system used by civil state surveying offices across Hessen and Germany (ETRS89 coordinate system).


* Powered by **Proj4js**, performing complex trigonometric map projections on-the-fly as the mouse moves.

---

## Local Development & Setup

Follow these steps to run the application locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### 1. Clone the repository

```bash
git clone https://github.com/petpeevephobia/tempus.git
cd tempus

```

### 2. Install dependencies

Because the project uses specific React 18 dependencies for mapping layers alongside Next.js 14, utilize the `--legacy-peer-deps` flag to bypass strict npm peer checks:

```bash
npm install --legacy-peer-deps

```

### 3. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

---

## Contact / Kontakt

**Nadra Mohamed Sah** 📍 Frankfurt am Main, Germany

📧 [qamaria.mdsah@gmail.com](https://www.google.com/search?q=mailto%3Aqamaria.mdsah%40gmail.com)

🔗 [LinkedIn Profile](https://linkedin.com/in/nadraqamaria)