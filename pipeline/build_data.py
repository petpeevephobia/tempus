import json
import os
import re

def compile_local_ogc_features():
    # 1. Resolve absolute file path to the downloaded local dataset asset
    input_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "raw_hessen_export.json"))
    
    print(f"Reading local Hessian dataset: {input_path}")
    
    if not os.path.exists(input_path):
        print(f"Error: Raw export file not found at target directory: {input_path}")
        return

    try:
        with open(input_path, "r", encoding="utf-8") as f:
            raw_data = json.load(f)
    except Exception as e:
        print(f"Failed parsing the local JSON structural file: {error}")
        return

    geojson_data = {
        "type": "FeatureCollection",
        "features": []
    }

    raw_features = raw_data.get("features", [])
    print(f"Processing {len(raw_features)} total entities for defensive typologies...")

    for idx, feature in enumerate(raw_features):
        props = feature.get("properties", {})
        geom = feature.get("geometry", {})
        
        if not geom:
            continue

        # 2. Map property keys matching the official Hessian GDI schema layout
        name = props.get("siteName") or "Historical Structure"
        description = props.get("legalFoundationDocument") or ""
        style_direction = props.get("siteDesignation") or "Monument"
        feature_id = props.get("gml_id") or str(idx)
        external_url = props.get("publicationSource") or f"https://denkmalpflege-hessen.de"

        # 3. Strip HTML markup strings to clean up text content for matching
        clean_text_blob = re.sub(r'<[^>]+>', '', f"{name} {description}").lower()
        
        # Isolate defensive architectural structures (Castles, City Walls, Roman Forts)
        defensive_keywords = [r"burg", r"schloss", r"stadtmauer", r"befestigung", r"wehrturm", r"landwehr", r"schanze", r"bastei", r"kastell"]
        if not any(re.search(kw, clean_text_blob) for kw in defensive_keywords):
            continue

        # 4. Spatiotemporal Extraction (Regex Timeline Identification)
        # Parses the text body for the first 3- or 4-digit number to isolate the construction epoch
        years_found = re.findall(r'\b(\d{3},?\d{1}|\d{4})\b', clean_text_blob)
        if years_found:
            # Clean possible comma separators from number string and convert to native integer
            start_year = int(years_found[0].replace(',', ''))
            # Strict safety bounds check to validate chronological data inside the Web GIS slider
            if start_year > 2026 or start_year < -450:
                start_year = 1200
        else:
            # Fallback value covering standard high-medieval structures if no text year is matched
            start_year = 1200
            
        # Default placeholder indicating the monument is still standing today
        end_year = 9999 

        # 5. Securely flatten multi-dimensional arrays into flat coordinate points
        geom_type = geom.get("type")
        coords = geom.get("coordinates", [])

        if not coords:
            continue

        try:
            if geom_type == "Point":
                # Single layer depth: [Longitude, Latitude]
                final_coordinates = [float(coords[0]), float(coords[1])]
            elif geom_type in ["LineString", "MultiPoint"]:
                # Grab the first vertex coordinate pair from line segments
                final_coordinates = [float(coords[0][0]), float(coords[0][1])]
            elif geom_type in ["Polygon", "MultiLineString"]:
                # Pull the starting corner coordinates of the exterior outline ring structure
                final_coordinates = [float(coords[0][0][0]), float(coords[0][0][1])]
            elif geom_type == "MultiPolygon":
                # Pull the first perimeter vertex of the primary boundary block
                final_coordinates = [float(coords[0][0][0][0]), float(coords[0][0][0][1])]
            else:
                continue
        except (IndexError, TypeError, ValueError):
            # Safe recovery fallback: calculate geometric center using feature bounding box values
            bbox = feature.get("bbox", [])
            if len(bbox) >= 4:
                final_coordinates = [(bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2]
            else:
                continue

        # 6. Format compliant GeoJSON feature objects matching Tempus schemas
        cleaned_feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": final_coordinates 
            },
            "properties": {
                # Drops heavy regional street prefixes for clean map popup layouts
                "name": name.split(",")[-1].strip(), 
                "start": start_year,
                "end": end_year,
                "style": style_direction.capitalize(),
                # Truncate clean string blocks to keep Leaflet popups responsive
                "description": re.sub(r'<[^>]+>', '', description)[:250] + "...", 
                "url": external_url
            }
        }

        geojson_data["features"].append(cleaned_feature)

    # 7. Write compiled payload into the Next.js assets directory
    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "monuments.json")

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(geojson_data, f, indent=2, ensure_ascii=False)
        
    print(f"\nSuccess! Compiled {len(geojson_data['features'])} filtered web-ready landmarks to: {output_path}")

if __name__ == "__main__":
    compile_local_ogc_features()
