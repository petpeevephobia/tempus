This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
pipeline/
  build_data.py
  monuments_raw.py
public/
  monuments.json
src/
  app/
    globals.css
    layout.js
    page.js
  components/
    MapCanvas.jsx
tempus/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  public/
    file.svg
    globe.svg
    next.svg
    vercel.svg
    window.svg
  .gitignore
  AGENTS.md
  CLAUDE.md
  eslint.config.mjs
  next.config.ts
  package.json
  postcss.config.mjs
  README.md
  tsconfig.json
.gitignore
package.json
postcss.config.js
PRD.md
README.md
tailwind.config.js
```

# Files

## File: pipeline/build_data.py
````python
import json
import os
from monuments_raw import RAW_MONUMENTS

def generate_geojson():
    # Constructing a clean RFC 7946 compliant GeoJSON Structure
    geojson_data = {
        "type": "FeatureCollection",
        "features": []
    }

    for item in RAW_MONUMENTS:
        # Build individual geographic feature
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                # GIS standard coordinate order: [Longitude, Latitude]
                "coordinates": [item["longitude"], item["latitude"]]
            },
            "properties": {
                "name": item["name"],
                "start": item["start"],
                "end": item["end"],
                "style": item["style"],
                "description": item["description"]
            }
        }
        geojson_data["features"].append(feature)

    # Determine destination directory (write directly to the Next.js public/ folder)
    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "monuments.json")

    # Serialize to formatted JSON
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(geojson_data, f, indent=2, ensure_ascii=False)
        
    print(f"Success! Spatiotemporal database compiled to: {output_path}")

if __name__ == "__main__":
    generate_geojson()
````

## File: src/app/globals.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Leaflet container physical height fallback */
.leaflet-container {
  width: 100%;
  height: 100%;
}
````

## File: src/app/layout.js
````javascript
// src/app/layout.js
import "./globals.css"; // Ensure this line is at the top!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
````

## File: tempus/app/globals.css
````css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
````

## File: tempus/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
````

## File: tempus/app/page.tsx
````typescript
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
````

## File: tempus/public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: tempus/public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: tempus/public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: tempus/public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: tempus/public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: tempus/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: tempus/AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
````

## File: tempus/CLAUDE.md
````markdown
@AGENTS.md
````

## File: tempus/eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: tempus/next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
````

## File: tempus/package.json
````json
{
  "name": "tempus",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: tempus/postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: tempus/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: tempus/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: .gitignore
````
# Python Virtual Environment
env/
.venv/
__pycache__/

# Node Packaged Modules
node_modules/
.next/
````

## File: package.json
````json
{
  "name": "tempus",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "leaflet": "^1.9.4",
    "leaflet-defaulticon-compatibility": "^0.1.2",
    "next": "14.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-leaflet": "^4.2.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.5.4",
    "postcss": "^8.5.19",
    "tailwindcss": "^3.4.19"
  }
}
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: PRD.md
````markdown
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
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
````

## File: pipeline/monuments_raw.py
````python
# Raw dataset curated for Frankfurt/Hessen historical landmarks
RAW_MONUMENTS = [
    {
        "name": "Kaiserpfalz Franconofurd",
        "latitude": 50.1109,
        "longitude": 8.6821,
        "start": 843,
        "end": 1250,
        "style": "Carolingian",
        "description": "The historic origin of Frankfurt. Built as a royal palace, serving as a seat of power for Charlemagne's successors."
    },
    {
        "name": "Frankfurter Dom (St. Bartholomew's)",
        "latitude": 50.1105,
        "longitude": 8.6825,
        "start": 1250,
        "end": 9999,  # 9999 represents "still standing today"
        "style": "Gothic",
        "description": "The dominant Gothic collegiate church of Frankfurt, serving as the official election and coronation site of Holy Roman Emperors."
    },
    {
        "name": "Saalburg Roman Fort",
        "latitude": 50.2721,
        "longitude": 8.5644,
        "start": 90,
        "end": 260,
        "style": "Roman",
        "description": "A cohort fort on the Limes Germanicus, serving as a key military outpost along the outer border of the Roman Empire."
    },
    {
        "name": "Burg Kronberg",
        "latitude": 50.1831,
        "longitude": 8.4414,
        "start": 1220,
        "end": 9999,
        "style": "High Medieval",
        "description": "An imposing hilltop fortress nestled in the Taunus mountains, built by the noble Knights of Kronberg."
    },
    {
        "name": "Staufenmauer (City Wall)",
        "latitude": 50.1098,
        "longitude": 8.6808,
        "start": 1180,
        "end": 1806,
        "style": "Romanesque Defensive",
        "description": "The first stone boundary wall erected around Frankfurt to defend the free imperial city during the Staufen dynasty."
    },
    # Example of a BCE monument in pipeline/monuments_raw.py
    {
        "name": "Early Roman Frontier Trench",
        "latitude": 50.1234,
        "longitude": 8.6543,
        "start": -50,  # 50 BCE
        "end": 260,    # 260 AD
        "style": "Early Roman",
        "description": "An early defensive trench system established during Roman expansion campaigns."
    }
]
````

## File: public/monuments.json
````json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.6821,
          50.1109
        ]
      },
      "properties": {
        "name": "Kaiserpfalz Franconofurd",
        "start": 843,
        "end": 1250,
        "style": "Carolingian",
        "description": "The historic origin of Frankfurt. Built as a royal palace, serving as a seat of power for Charlemagne's successors."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.6825,
          50.1105
        ]
      },
      "properties": {
        "name": "Frankfurter Dom (St. Bartholomew's)",
        "start": 1250,
        "end": 9999,
        "style": "Gothic",
        "description": "The dominant Gothic collegiate church of Frankfurt, serving as the official election and coronation site of Holy Roman Emperors."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.5644,
          50.2721
        ]
      },
      "properties": {
        "name": "Saalburg Roman Fort",
        "start": 90,
        "end": 260,
        "style": "Roman",
        "description": "A cohort fort on the Limes Germanicus, serving as a key military outpost along the outer border of the Roman Empire."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4414,
          50.1831
        ]
      },
      "properties": {
        "name": "Burg Kronberg",
        "start": 1220,
        "end": 9999,
        "style": "High Medieval",
        "description": "An imposing hilltop fortress nestled in the Taunus mountains, built by the noble Knights of Kronberg."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.6808,
          50.1098
        ]
      },
      "properties": {
        "name": "Staufenmauer (City Wall)",
        "start": 1180,
        "end": 1806,
        "style": "Romanesque Defensive",
        "description": "The first stone boundary wall erected around Frankfurt to defend the free imperial city during the Staufen dynasty."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.6543,
          50.1234
        ]
      },
      "properties": {
        "name": "Early Roman Frontier Trench",
        "start": -50,
        "end": 260,
        "style": "Early Roman",
        "description": "An early defensive trench system established during Roman expansion campaigns."
      }
    }
  ]
}
````

## File: src/app/page.js
````javascript
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
  // Start the map default at 1250 AD (or set to -50 to test the new limit!)
  const [currentYear, setCurrentYear] = useState(1250);

  // Helper function to format negative numbers as BCE and positive as AD
  const formatYear = (year) => {
    if (year < 0) {
      return `${Math.abs(year)} BCE`;
    }
    return `${year} AD`;
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-950">
      
      <div className="absolute inset-0 z-0">
        <MapCanvas currentYear={currentYear} />
      </div>

      <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-xl bg-slate-950/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-slate-800/80 flex flex-col gap-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium tracking-wide">Active Era</span>
          {/* Use formatYear utility here */}
          <span className="text-emerald-400 font-bold text-lg tracking-wider">
            {formatYear(currentYear)}
          </span>
        </div>
        <input
          type="range"
          min="-50" // Changed minimum range limit to -50
          max="1900"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
        />
      </footer>

    </main>
  );
}
````

## File: src/components/MapCanvas.jsx
````javascript
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
````

## File: README.md
````markdown
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
````
