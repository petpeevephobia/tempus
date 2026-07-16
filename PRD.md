# Product Requirement Document (PRD)

---

## 1. Project Overview & Objective

**Tempus**, the "Historische Festungen" (Historic Fortresses) Map, is an interactive spatial-temporal web application that visualises the historical monuments, castles, and defensive walls of Frankfurt am Main and the surrounding Hessen region over time.

### The Core Objective

To secure a **Geomatiker Ausbildung** in Germany by proving an exceptional, dual capability:

1. 
**Modern Tech & UX:** Leveraging an advanced tech stack (React/Next.js, Tailwind CSS) and intuitive UX design  that far exceeds the skills of standard applicants.


2. **Geomatics Domain Knowledge:** Directly demonstrating core training competencies—such as handling coordinate reference systems (CRS), spatial-temporal data visualization, map-scale presentation, and geodetic ellipsoidal distance calculations (the "Geomatiker Twist").

---

## 2. Target Audience & "Ausbilder" Appeal

* **The Target User:** A German *Ausbildungsleiter* (training coordinator) reviewing hundreds of highly similar, text-based applications.
* **The "Wow" Factor:** Instead of just *telling* them you have "spatial imagination" and "careful working habits," you *show* them a polished, production-ready GIS web app centered on their local German cultural heritage.

---

## 3. Key Features & Functional Requirements

### Feature 1: Spatial-Temporal Map Viewer (The Visualizer)

* **Description:** A clean, full-screen interactive map centered on Frankfurt am Main and Hessen.
* **Timeline Slider:** A prominent range slider at the bottom of the map spanning **Year 800 to Year 1900**.
* **Dynamic Filtering:** As the user slides through the centuries, historical sites (castles, city walls, ruins) dynamically fade in or out based on their historical construction and destruction/decommission dates.
* **Interactive Tooltips/Popups:** Clicking a landmark displays its name, construction year, architectural style (e.g., Romanesque, Gothic, Baroque), and a short historical description.

### Feature 2 (COMING SOON): Geomatiker Twist – The "Feldmessung" (Field Measurement) Tool

* **Description:** A mock field-surveying simulator that calculates geodetic distance.
* **Workflow:**
1. The user clicks a ruler icon to activate **"Feldmessung-Modus"** (Surveying Mode).
2. The user clicks Point A (e.g., *Saalburg Roman Fort*) and Point B (e.g., *Kaiserpfalz Gelnhausen*) on the map.
3. The app draws a geodesic line (great-circle path) between the two points.
4. A sidebar panel instantly displays the **true ellipsoidal distance** calculated using the **Vincenty formula** (or Haversine formula) on the WGS84 ellipsoid.


* **Why it wins:** It proves to the *Ausbilder* that you understand that the Earth is a 3D ellipsoid, not a flat 2D canvas, showing a direct grasp of geodesy (*Erdmessung*).

### Feature 3 (COMING SOON): Coordinate Transformer Panel

* **Description:** A simple widget showing the exact geographic coordinates of the user's cursor.
* **Live Display:** Shows coordinates dynamically in both:
* **WGS84** (Decimal Degrees / EPSG:4326)
* **UTM Zone 32N** (Easting/Northing / EPSG:25832) — *the official civil state coordinate system used across Hessen and Germany.*



---

## 4. Technical Architecture & Tech Stack

To build this rapidly in a single day while leveraging your existing professional skillset:

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | React / Next.js, Tailwind CSS 

 | High-performance, beautifully styled, responsive single-page dashboard interface. |
| **Mapping Library** | Leaflet / `react-leaflet` | Lightweight, robust open-source library for interactive 2D web mapping. |
| **Data Processing** | Python (`pandas`, `geopandas`, `shapely`) 

 | For cleaning, filtering, and preparing the GeoJSON dataset. |
| **Geodetic Math** | `proj4js` & `geopy` (or pure JS Vincenty equivalent) | To handle UTM Zone 32N coordinate projection conversions and ellipsoidal distance calculations in real-time. |
| **Hosting** | Vercel  or GitHub Pages

 | Instant, reliable, free deployment so the recruiter can access it with a single click from your resume. |

---

## 5. Data Architecture (The GeoJSON Structure)

Your static spatial dataset (`monuments.geojson`) will be structured cleanly to show attention to detail:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.682127, 50.110633]
      },
      "properties": {
        "name": "Kaiserpfalz Frankfurt",
        "construction_year": 850,
        "destruction_year": 1250,
        "style": "Carolingian / Romanesque",
        "description": "An early medieval imperial palace located in the heart of Frankfurt's old town."
      }
    }
  ]
}

```

---

## 6. Design & UX Guidelines

* **Theme:** "Classic-Modern." Use a dark-themed base map (like Mapbox Dark or CartoDB DarkMatter) so the historical vectors/points glow vibrantly (emerald green or gold) based on their status.
* **Dashboard Layout:** * Left side: Control panel with the Timeline Slider and the Coordinate Transformer.
* Center: Main interactive map canvas.
* Right side/Drawer: "Feldmessung" calculation results, detailing the geodetic math formulas used (e.g., explicitly mentioning the "WGS84 Ellipsoid").



---

## 7. The 1-Day Implementation Schedule

```
 09:00 - 11:00 | DATA PREPARATION
               | Source or mock 10-15 high-quality historic points around Hessen. 
               | Write a quick Python script to format them into a flawless GeoJSON.
               
 11:00 - 14:00 | FRONTEND BASE & MAP SETUP
               | Spin up Next.js + Leaflet. Render the base map.
               | Build the Timeline Slider and filter the geo-features reactively.
               
 14:00 - 16:30 | THE GEOMATIKER STACK (Feldmessung & UTM)
               | Implement the click-to-measure tool using geodetic distance libraries.
               | Build the live mouse-coordinate box converting WGS84 coordinates to UTM Zone 32N.
               
 16:30 - 18:00 | POLISH, HOST & DOCUMENT
               | Style with Tailwind. Host on Vercel. 
               | Write a README explaining the geodetic concepts you implemented.

```

### Birds's-Eye View
#### Phase 1: The Raw Materials

Gather and format the geographic coordinates, chronological spans, and historical metadata of the locations you want to showcase.

#### Phase 2: The Base Canvas

Initialize an interactive digital map instance and center it on your target region.

#### Phase 3: The Time Dimension

Implement a logic layer that screens and filters your spatial data points in real time based on a user-controlled chronological value.

#### Phase 4: The Interface

Wrap the map container and temporal controls in a polished, highly intuitive visual layout.

#### Phase 5: The Launch

Publish the application to a public live link so it is instantly accessible to your audience.

---

## 8. Success Metric (The Resume Integration)

You will add this project to the top of your resume's portfolio section:

> ### **Historische Festungen (Hessen) | Geomatics Web GIS**
> 
> 
> 
> Developed a spatial-temporal GIS web application visualizing historic German fortifications using React, Leaflet, and Python. Handled coordinate transformations (WGS84 to UTM Zone 32N) and integrated real-time geodetic distance calculations over the WGS84 ellipsoid (Vincenty formula) to simulate physical field-surveying methods.
> 
>