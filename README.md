# Tempus

An interactive, spatiotemporal Web GIS application designed to visualize the evolution of historical fortifications, castles, and defensive walls in Frankfurt am Main and the surrounding Hessen region. 

This project demonstrates the core competencies required of a modern **Geomatiker**, bridging the gap between traditional geodata handling, chronological database filtering, and modern web-based cartographic presentation.

---

## Live Demo
🔗 **[Insert Vercel/GitHub Pages Link here]**

---

## Project Overview & Objective

The objective of **GeoZeit** is to show how historical spatial-temporal datasets can be visualised dynamically. Rather than static paper maps, this application allows users to slide through centuries of history (from 800 AD to 1900 AD) to see defensive landmarks appear, change, and disappear in real-time as the geopolitical landscape of Frankfurt evolved.

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
        "description": "The historical heart of early Frankfurt. Emperor Charlemagne's seat of power."
      }
    }
  ]
}