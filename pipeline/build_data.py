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