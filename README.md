# Tempus (Hessen Historica)

An interactive, spatiotemporal Web GIS application designed to visualize the evolution of historical fortifications, castles, and defensive walls in Frankfurt am Main and the surrounding Hessen region. 

This project demonstrates the core competencies required of a modern **Geomatiker**, bridging the gap between traditional geodata handling, chronological database filtering, and modern web-based cartographic presentation.

---

## Live Demo
🔗 **[Insert your Vercel/GitHub Pages Link here]**

---

## Project Overview & Objective

The objective of **Tempus** is to show how historical spatial-temporal datasets can be visualised dynamically. Rather than static paper maps, this application allows users to slide through centuries of history (from 800 AD to 1900 AD) to see defensive landmarks appear, change, and disappear in real-time as the geopolitical landscape of Frankfurt evolved.

### Geomatics Competencies Demonstrated:
*   **Spatiotemporal Data Management:** Handling spatial features linked to timeline attributes (start/end dates).
*   **Coordinate Representation:** Preparing geographic data in standard WGS84 coordinate systems for web-map integration.
*   **Cartographic Design:** Designing a highly legible, dark-themed base map that emphasizes thematic vector overlays for optimal user experience.

---

## Tech Stack

*   **Frontend Framework:** Next.js (React) & Tailwind CSS
*   **Mapping Library:** Leaflet & React-Leaflet
*   **Data Format:** GeoJSON (RFC 7946 Standard)
*   **Data Pipeline:** Python (for raw coordinate preparation and attribute joining)

---

## 📁 Data Structure (GeoJSON Schema)

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
        "description": "The historical heart of early Frankfurt. Emperor Charlemagne's seat of power."
      }
    }
  ]
}

```

---

## Local Development & Setup

Follow these steps to run the application locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18 or higher) installed.

### 1. Clone the repository

```bash
git clone [https://github.com/petpeevephobia/tempus.git](https://github.com/petpeevephobia/tempus.git)
cd tempus

```

### 2. Install dependencies

```bash
npm install

```

### 3. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Key Features Implemented

1. **Interactive Timeline Slider:** A custom slider interface filtering live geographic features across a range from 800 AD to 1900 AD.
2. **Context-Aware Vector Layering:** Markers dynamically mount and unmount from the Leaflet layer depending on the selected year state.
3. **Responsive Information Popups:** Clickable vector markers showcasing attributes such as architectural epochs, historical summaries, and precise build/decommission dates.

---

## Contact / Kontakt

**Nadra Mohamed Sah**

📍 Frankfurt am Main, Germany

📧 [qamaria.mdsah@gmail.com](mailto:qamaria.mdsah@gmail.com)

🔗 [LinkedIn Profile](https://linkedin.com/in/nadraqamaria)