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
````
pipeline/
  build_data.py
  monuments_raw.py
  raw_hessen_export.json
public/
  monuments copy.json
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
bug.md
package.json
postcss.config.js
README.md
requirements.txt
tailwind.config.js
````

# Files

## File: pipeline/raw_hessen_export.json
````json
{
  "serviceTitle": "WFS Denkmalschutz Hessen (INSPIRE)",
  "collectionId": "1266",
  "collectionName": "denkx:baudenkmal",
  "collectionTitle": "Baudenkmal",
  "title": "Baudenkmal",
  "id": "denkx:baudenkmal",
  "description": "Kulturdenkmal nach \u00a7 2 Abs. 1 Hessisches Denkmalschutzgesetz (HDSchG), Gr\u00fcn- und Wasserfl\u00e4chen als Kulturdenkmal nach \u00a7 2 Abs. 1 HDSchG oder Bestandteil einer Gesamtanlage nach \u00a7 2 Abs. 3 HDSchG",
  "extent": {
    "spatial": {
      "minx": "7.730786691267",
      "miny": "49.458595245119774",
      "maxx": "10.225650786092936",
      "maxy": "51.52191381136208"
    },
    "temporal": []
  },
  "type": "FeatureCollection",
  "links": [
    {
      "rel": "self",
      "type": "application\/geo+json",
      "title": "this document",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json"
    },
    {
      "rel": "next",
      "type": "application\/geo+json",
      "title": "next page",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json&offset=10&limit=10"
    },
    {
      "rel": "last",
      "type": "application\/geo+json",
      "title": "last page",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json&offset=50480&limit=10"
    }
  ],
  "numberMatched": 50483,
  "numberReturned": 10,
  "timeStamp": "2026-07-28T21:47:55.7200Z",
  "genTime": 0.24065017700195312,
  "features": [
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003011804",
        "inspireID": "LFDH01001003011804",
        "legalFoundationDocument": "<p>Dreiseitige Hofanlage, das Wohnhaus zweigeschossig mit Satteldach, Erdgeschoss massiv, Obergeschoss konstruktives Fachwerk des 19. Jhs. Fenster des freistehenden Giebels und des Erdgeschosses mit roten Sandsteingew\u00e4nden, seitlich rundbogiger Kellereingang mit Inschrift: \"Johannes Lulei 1859\". Auf dem Dach Wetterfahne mit Datierung 1903. Zu diesem Zeitpunkt vermutlich Verl\u00e4ngerung des Geb\u00e4udes nach Nordosten. Wirtschaftsgeb\u00e4ude in Fachwerk, jedoch teilweise ver\u00e4ndert. Hoffl\u00e4che noch vollst\u00e4ndig gepflastert, die Einfahrt mit Sandsteinpfeiler. Neben seiner wirtschaftsgeschichtlichen Bedeutung kommt dem Anwesen wegen seiner Lage an der Einm\u00fcndung der Alten Stra\u00dfe in die Siegfriedstra\u00dfe auch eine ortsbildpr\u00e4gende Bedeutung zu.<\/p><\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Kirschhausen_Alte Stra\u00dfe 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30118\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.68907942, 49.64618471, 8.68963754, 49.64653161],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.68959381, 49.64634832],
            [8.68963754, 49.64633235],
            [8.68959843, 49.64627569],
            [8.68949846, 49.64618471],
            [8.68939239, 49.64623687],
            [8.6895088, 49.64632985],
            [8.68952939, 49.64635454],
            [8.68928877, 49.64643788],
            [8.68920159, 49.64630046],
            [8.68907942, 49.64633314],
            [8.68920469, 49.64653161],
            [8.68931736, 49.64649361],
            [8.68932291, 49.64649173],
            [8.68956268, 49.64641099],
            [8.68957351, 49.64640725],
            [8.68954039, 49.64636778],
            [8.68959381, 49.64634832]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003011901",
        "inspireID": "LFDH01001003011901",
        "legalFoundationDocument": "<p>Granitkreuz vor dem Haus Brannackerweg 2, in erh\u00f6hter Lage auf der Einfriedungsmauer. Schwarzer Korpus, \"INRI\"-Schriftrolle, am dreiteiligen Sockel Inschrifttafel: \"Es ist vollbracht. Joh. XIX. 30.1907\". Das am 21.7.1907 geweihte Kreuz wurde von Peter Rothermel, dem Besitzer des Eckhauses, auf Anregung des Benediktinerpaters Leander Helmling, Lehrer am Hofe Franz Josefs von \u00d6sterreich, gestiftet. Ausf\u00fchrende war die Steinbruchfirma Fischer und Helmbrecht.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Kirschhausen_Brannackerweg 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30119\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.6934096, 49.64597729, 8.6934096, 49.64597729],
      "geometry": { "type": "Point", "coordinates": [8.6934096, 49.64597729] },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012004",
        "inspireID": "LFDH01001003012004",
        "legalFoundationDocument": "<div><p>Traufst\u00e4ndiges, zweigeschossiges Fachwerkwohnhaus mit steilem, aufgeschobenem Satteldach. Das Fachwerk konstruktiv, im Erdgeschoss Winkelh\u00f6lzer, das Obergeschoss mit kr\u00e4ftiger Wilde-Mann-Figuration. Im hohen Sockel rundbogiges Kellerportal mit Initialen JMF und der Jahreszahl 1574. Offensichtlich wurde das urspr\u00fcngliche Fachwerk \u00fcber dem Massivsockel in der zweiten H\u00e4lfte des 18. Jhs. grundlegend erneuert.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kellereigasse 5",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30120\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64412909, 49.64126983, 8.64427897, 49.64137419],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64417121, 49.64127323],
            [8.64417304, 49.64126983],
            [8.64427897, 49.6412872],
            [8.64424163, 49.64137419],
            [8.64412909, 49.64135591],
            [8.64417121, 49.64127323]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012104",
        "inspireID": "LFDH01001003012104",
        "legalFoundationDocument": "<div><p>Die s\u00fcd\u00f6stliche Ecke des Gro\u00dfen Marktes dominierendes Fachwerkhaus, dreigeschossig mit verputztem Erdgeschoss und Kr\u00fcppelwalmdach, das Fachwerk wohl aus der ersten H\u00e4lfte des 18. Jhs. mit Wilder-Mann-Konfiguration, eingetieften, gerahmten Rauten, Feuerb\u00f6cken sowie Andreaskreuzen in den Br\u00fcstungsfeldern.Kleine Streben teilweise mit Nasen. Geschoss\u00fcberst\u00e4nde in Balkenst\u00e4rke, profilierte Geb\u00e4lkzonen. Zum Laudenbacher Tor rundbogig geschlossenes Fenster, zur Kirchgasse Ladeneinbau sowie eingeschossiger Anbau.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 1",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30121\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64521457, 49.64136308, 8.64541414, 49.64152703],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64530578, 49.64136876],
            [8.6453096, 49.64136792],
            [8.64531039, 49.64136888],
            [8.64531636, 49.64136683],
            [8.64531799, 49.64137052],
            [8.64541414, 49.64136308],
            [8.64537136, 49.64143983],
            [8.64533599, 49.64150335],
            [8.64532281, 49.64152703],
            [8.64521457, 49.64149788],
            [8.64530841, 49.64137463],
            [8.64530578, 49.64136876]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012204",
        "inspireID": "LFDH01001003012204",
        "legalFoundationDocument": "<div><p>M\u00e4chtiger, zweigeschossiger Wohnbau mit Kr\u00fcppelwalmdach, westliche Begrenzung des Kirchplatzes, hier im massiven Erdgeschoss Eingang mit Oberlicht, datiert 1696. Daneben rundbogige Toreinfahrt. Das Obergeschoss mit kr\u00e4ftigem Fachwerk (Wilde M\u00e4nner), als Zierformen Feuerb\u00f6cke, gerundete Streben mit Nasen, zur Kirchengasse \u00fcberkreuzte Rauten. Die mit profilierten Gew\u00e4nden gezierten Fenster teilweise gekoppelt.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 3",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30122\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.6454195, 49.64137675, 8.64560052, 49.6415608],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64546685, 49.64142701],
            [8.64548781, 49.64137675],
            [8.6455102, 49.64137782],
            [8.64560052, 49.64138224],
            [8.64553667, 49.64153819],
            [8.64552698, 49.6415608],
            [8.64549885, 49.64156008],
            [8.6454195, 49.64154229],
            [8.64546685, 49.64142701]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012304",
        "inspireID": "LFDH01001003012304",
        "legalFoundationDocument": "<div><p>Giebelst\u00e4ndiges, den Kirchplatz nach Nordwesten begrenzendes Wohnhaus, zweigeschossig mit massiv erneuertem Erdgeschoss, Fachwerkobergeschoss und Satteldach. R\u00e4hm-Schwellen- Zonen mit kr\u00e4ftiger Profilierung, Mannfiguration. In der westlichen Achse des vierachsigen Baues der Eingang mit Sandsteingew\u00e4nde, im Sturz das Baudatum 1785, die Initialen FEAM, eine zentrale Rosette sowie Zahnschnittornamentik. Dar\u00fcber, im Br\u00fcstungsfeld, verglaste Nische mit der Hl. Familie in Holz.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 4",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30123\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64552415, 49.64159705, 8.64566453, 49.64167414],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.6456256, 49.64167414],
            [8.64552415, 49.64164694],
            [8.64555579, 49.64159705],
            [8.64566453, 49.64161268],
            [8.6456256, 49.64167414]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012404",
        "inspireID": "LFDH01001003012404",
        "legalFoundationDocument": "<p>In topographisch erh&ouml;hter Lage am &ouml;stlichen Ende der Kirchgasse, neben der Peterskirche gelegenes Wohnhaus, im Kern wohl 1561 erbaut, im 18. Jh. erneuert. Seit 1776 Wohnung des Kantors, zugleich Schulhaus f&uuml;r die j&uuml;ngsten Kinder. Damit das zweit&auml;lteste Schulhaus der Stadt nach dem Haus Kirchengasse 6\/8.<\/p>\r\n<p>Zweigeschossig mit Satteldach, das Erdgeschoss massiv mit rundbogigem Kellerportal (hier Scheitelstein mit Jahreszahl 1561), das Obergeschoss mit kr&auml;ftiger Mann-Figuration und Feuerbockbr&uuml;stungsmotiven. Als Abschluss der Kirchengasse auch von st&auml;dtebaulicher Bedeutung.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Hinterer Graben 1",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30124\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64672944, 49.64177033, 8.64703626, 49.64186222],
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [8.64697219, 49.64184663],
              [8.64703626, 49.6418388],
              [8.64702635, 49.6418056],
              [8.64701808, 49.64177798],
              [8.64701577, 49.64177033],
              [8.64698264, 49.64177599],
              [8.64694315, 49.64178262],
              [8.64697219, 49.64184663]
            ]
          ],
          [
            [
              [8.64672944, 49.64178472],
              [8.64673512, 49.64181036],
              [8.64673631, 49.64186222],
              [8.64688175, 49.64185934],
              [8.64690237, 49.64185886],
              [8.64697649, 49.64185738],
              [8.6469717, 49.64184694],
              [8.64694232, 49.64178293],
              [8.64694051, 49.64178295],
              [8.64689066, 49.64178341],
              [8.64672944, 49.64178472]
            ]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012504",
        "inspireID": "LFDH01001003012504",
        "legalFoundationDocument": "<p>Langgestreckter, traufst&auml;ndiger Bau n&ouml;rdlich des Kirchplatzes, zweigeschossig mit Satteldach, das Erdgeschoss teilweise massiv erneuert, das Obergeschoss in Fachwerk mit kr&auml;ftigen Mann-Figuren und gerahmten Rauten in den Br&uuml;stungsgefachen. Im Erdgeschoss Doppelt&uuml;r mit Stichb&ouml;gen und Oberlichtern, teilweise gekoppelte Fenster. Das heute zu Wohnzwecken umgebauten Geb&auml;ude gilt als &auml;lteste Schule der Stadt, die bereits 1576 hier eingerichtet wurde. Der Bau, der in seinem Kern in diese Zeit zur&uuml;ckreicht, wurde 1712 gravierend umgebaut, aus dieser Zeit datiert vermutlich das Fachwerk. Die Doppelt&uuml;r entstand vermutlich 1819, als man die Wohnung des Benefiziaten, der hier auch untergebracht war, baulich verbesserte. Die rechte T&uuml;r f&uuml;hrte dann gesondert in die Benefiziatenwohnung. Die Dachgaupen sind das Ergebnis eines Dachausbaus zu Wohnzwecken aus j&uuml;ngster Zeit.<\/p>\r\n<p>F&uuml;r die Schulgeschichte Heppenheims ist das Geb&auml;ude von besonderer Bedeutung.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 6",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30125\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64560887, 49.64161575, 8.6458735, 49.64178019],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.6458096, 49.64163645],
            [8.6456865, 49.64161575],
            [8.64561851, 49.64171389],
            [8.64561084, 49.64172384],
            [8.64560887, 49.64172779],
            [8.64562531, 49.64173324],
            [8.64562838, 49.64172992],
            [8.64563466, 49.64172293],
            [8.64567721, 49.64173808],
            [8.64568042, 49.64173414],
            [8.64570569, 49.64174284],
            [8.64571273, 49.64174529],
            [8.64576552, 49.64176353],
            [8.64575658, 49.6417743],
            [8.64577412, 49.64178019],
            [8.64578278, 49.64176952],
            [8.64581954, 49.64172001],
            [8.6458598, 49.64166566],
            [8.6458735, 49.64164718],
            [8.6458096, 49.64163645]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012604",
        "inspireID": "LFDH01001003012604",
        "legalFoundationDocument": "<p>Repr&auml;sentatives, zweigeschossiges Wohnhaus mit Walmdach, entstanden aus der Zusammenfassung zweier wohl ins Mittelalter zur&uuml;ckreichender H&auml;user, die im Kern noch vorhanden sind. Das Erscheinungsbild jedoch gepr&auml;gt durch den gravierenden Umbau um 1750 mit massivem Erdgeschoss und mit kr&auml;ftigen H&ouml;lzern konstruiertem Fachwerkobergeschoss. Mehrfach profilierte Schwelle, Mann-Figuren mit geschweiften Streben, Feuerb&ouml;cke in den Br&uuml;stungen. Zu den Eing&auml;ngen Freitreppen. Der westliche Eingang mit Sandsteinohrengew&auml;nde, Oberlicht und Jahreszahl 1567, der &ouml;stliche einfach. Durchfahrt im hohen Sockel, hier alte Fenster&ouml;ffnung. In dem Haus war zwischen 1815 und 1825 die Knabenschule untergebracht. 1864 wurde hier die Kolpingsfamilie Heppenheim gegr&uuml;ndet. Im Hof des &ouml;stlichen Hausteiles ist noch eine alte Schmiede mit den entsprechenden Einrichtungsgegenst&auml;nden erhalten.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 12",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30126\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64652493, 49.6418091, 8.64673648, 49.64191007],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64673512, 49.64181036],
            [8.64673631, 49.64186222],
            [8.64673648, 49.64187975],
            [8.64668675, 49.64188239],
            [8.64664669, 49.64188358],
            [8.64663203, 49.64188402],
            [8.64663229, 49.64188699],
            [8.64663452, 49.64190606],
            [8.64653576, 49.64191007],
            [8.64652573, 49.6418317],
            [8.64652515, 49.64182724],
            [8.64652493, 49.64182545],
            [8.64667598, 49.6418091],
            [8.64673512, 49.64181036]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012704",
        "inspireID": "LFDH01001003012704",
        "legalFoundationDocument": "<div><p>Schmales, langgestrecktes Wohnhaus an der Einm\u00fcndung der Kleinen Bach in die Marktstra\u00dfe, in seinen Proportionen ungew\u00f6hnlich mit sieben zu einer Achse. Zweigeschossig mit steilem, aufgeschobenem Satteldach, das Fachwerkobergeschoss leicht \u00fcber das massiv errichtete Erdgeschoss vorkragend. Zur Stra\u00dfe zweil\u00e4ufige Treppenanlage. Das wohl um 1800 entstandene Haus ist pr\u00e4gend f\u00fcr den Stra\u00dfenraum der unteren Marktstra\u00dfe.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kleine Bach 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30127\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64307434, 49.64246451, 8.64328972, 49.64266408],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64315155, 49.64248566],
            [8.64311681, 49.64246451],
            [8.64307434, 49.64248029],
            [8.64310755, 49.64251896],
            [8.64312635, 49.64254078],
            [8.64317631, 49.642599],
            [8.64319007, 49.64261756],
            [8.64321318, 49.64264874],
            [8.64321735, 49.64264731],
            [8.64323106, 49.64266408],
            [8.6432761, 49.64264228],
            [8.64328862, 49.6426362],
            [8.64328972, 49.64263566],
            [8.64324713, 49.64259131],
            [8.64315155, 49.64248566]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    }
  ]
}
````

## File: public/monuments copy.json
````json
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
        "url": "https://www.archaeologisches-museum-frankfurt.de/de/ausstellungen/kaiserpfalz-franconofurd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5661, 50.2725]
      },
      "properties": {
        "name": "Römerkastell Saalburg",
        "start": 90,
        "end": 260,
        "style": "Roman",
        "description": "A completely reconstructed Roman cohort fort located on the Upper Germanic Limes.",
        "url": "https://www.saalburgmuseum.de/en/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [9.1925, 50.2031]
      },
      "properties": {
        "name": "Kaiserpfalz Gelnhausen",
        "start": 1170,
        "end": 9999,
        "style": "Romanesque",
        "description": "The best-preserved Palas architectural ruin built under Emperor Friedrich I Barbarossa.",
        "url": "https://www.schloesser-hessen.de/de/kaiserpfalz-gelnhausen"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6869, 50.1118]
      },
      "properties": {
        "name": "Staufenmauer",
        "start": 1180,
        "end": 1582,
        "style": "Romanesque",
        "description": "The ancient stone fortifications built to protect the core boundaries of Alt-Frankfurt.",
        "url": "https://de.wikipedia.org/wiki/Staufenmauer"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6816, 50.1175]
      },
      "properties": {
        "name": "Eschenheimer Turm",
        "start": 1426,
        "end": 9999,
        "style": "Late Gothic",
        "description": "The finest of Frankfurt's former 42 town wall watchtowers, standing 47 meters tall as a striking relic of the medieval city fortifications.",
        "url": "https://de.wikipedia.org/wiki/Eschenheimer_Turm"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6819, 50.1101]
      },
      "properties": {
        "name": "Saalhof",
        "start": 1150,
        "end": 9999,
        "style": "Romanesque / Baroque",
        "description": "The oldest preserved structural monument in Frankfurt's historic center, originally built as a Staufer-era royal imperial castle (Reichsburg).",
        "url": "https://de.wikipedia.org/wiki/Saalhof"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6817, 50.1098]
      },
      "properties": {
        "name": "Rententurm",
        "start": 1456,
        "end": 9999,
        "style": "Late Gothic",
        "description": "A fortified harbor gate tower along the Main River, serving as the strategic customs house and defensive anchor of the Saalhof complex.",
        "url": "https://de.wikipedia.org/wiki/Rententurm"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6893, 50.1075]
      },
      "properties": {
        "name": "Kuhhirtenturm",
        "start": 1390,
        "end": 9999,
        "style": "Gothic",
        "description": "A southern bastion tower in Alt-Sachsenhausen that originally guarded the bridgeheads, later famously used as a residence by composer Paul Hindemith.",
        "url": "https://de.wikipedia.org/wiki/Kuhhirtenturm"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6853, 50.1108]
      },
      "properties": {
        "name": "Kaiserdom St. Bartholomäus",
        "start": 1250,
        "end": 9999,
        "style": "Gothic",
        "description": "The Imperial Cathedral of Saint Bartholomew. The grand site of election and coronation for the Holy Roman Emperors.",
        "url": "https://de.wikipedia.org/wiki/Kaiserdom_St._Bartholom%C3%A4us"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6756, 50.1136]
      },
      "properties": {
        "name": "Hauptwache",
        "start": 1730,
        "end": 9999,
        "style": "Baroque",
        "description": "The historic central guardhouse and prison facility of Frankfurt's municipal militia, famously stormed during the 1833 democratic uprising.",
        "url": "https://de.wikipedia.org/wiki/Hauptwache_(Geb%C3%A4ude)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5463, 50.0984]
      },
      "properties": {
        "name": "Schloss Höchst",
        "start": 1356,
        "end": 9999,
        "style": "Renaissance / Gothic",
        "description": "The former residency of the Archbishops of Mainz, built to enforce tariffs and safeguard Mainz's territory on the western flank of Frankfurt.",
        "url": "https://de.wikipedia.org/wiki/Hoechster_Schloss"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6826, 50.1121]
      },
      "properties": {
        "name": "Staufenmauer (An der Staufenmauer)",
        "start": 1180,
        "end": 9999,
        "style": "Romanesque",
        "description": "A surviving open-air stretch of Frankfurt's first massive stone ring-wall, built under the Hohenstaufen emperors to shield the expanding Altstadt.",
        "url": "https://de.wikipedia.org/wiki/Staufenmauer"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6806, 50.1102]
      },
      "properties": {
        "name": "Der Römer",
        "start": 1405,
        "end": 9999,
        "style": "Gothic / Renaissance",
        "description": "The historic, three-gabled city hall complex of Frankfurt that hosted the coronation banquets of the Holy Roman Empire.",
        "url": "https://de.wikipedia.org/wiki/R%C3%B6mer_(Frankfurt_am_Main)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6837, 50.1103]
      },
      "properties": {
        "name": "Alte Stadtwaage",
        "start": 1503,
        "end": 1944,
        "style": "Renaissance",
        "description": "The former municipal weighing house and central standard-measure office, a masterfully framed half-timbered house destroyed during WWII and rebuilt in the New Old Town.",
        "url": "https://de.wikipedia.org/wiki/Stadtwaage_(Frankfurt_am_Main)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.7042, 50.1418]
      },
      "properties": {
        "name": "Friedberger Warte",
        "start": 1478,
        "end": 9999,
        "style": "Gothic / Renaissance",
        "description": "One of the original fortified outer watchtowers of Frankfurt's Landwehr defense system, strategically guarding the trade route to Friedberg.",
        "url": "https://de.wikipedia.org/wiki/Friedberger_Warte"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6873, 50.0898]
      },
      "properties": {
        "name": "Sachsenhäuser Warte",
        "start": 1414,
        "end": 9999,
        "style": "Gothic",
        "description": "A fortified watchtower built as part of the outer defense ring to protect the southern flanks of Sachsenhausen along the trade route to Darmstadt.",
        "url": "https://de.wikipedia.org/wiki/Sachsenh%C3%A4user_Warte"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6504, 50.1197]
      },
      "properties": {
        "name": "Bockenheimer Warte",
        "start": 1435,
        "end": 9999,
        "style": "Late Gothic",
        "description": "A landmark watchtower guarding the western border of Frankfurt's territory, surviving as a stark architectural anchor of the Bockenheim district.",
        "url": "https://de.wikipedia.org/wiki/Bockenheimer_Warte"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6436, 50.1030]
      },
      "properties": {
        "name": "Galluswarte",
        "start": 1414,
        "end": 9999,
        "style": "Gothic",
        "description": "Originally known as the Galgenwarte, this outer defensive watchtower guarded the western trade routes through the Mainzer Landstraße.",
        "url": "https://de.wikipedia.org/wiki/Galluswarte"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5083, 50.1811]
      },
      "properties": {
        "name": "Burg Kronberg",
        "start": 1220,
        "end": 9999,
        "style": "Romanesque / Gothic",
        "description": "An impressive hilltop castle complex in the Taunus mountains that served as the ancestral seat of the powerful Knights of Kronberg.",
        "url": "https://de.wikipedia.org/wiki/Burg_Kronberg"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.4628, 50.1831]
      },
      "properties": {
        "name": "Burgruine Königstein",
        "start": 1200,
        "end": 1796,
        "style": "Romanesque / Renaissance",
        "description": "One of the largest fortress ruins in Germany, which guarded highly strategic military and trade paths through the Taunus range before its destruction.",
        "url": "https://de.wikipedia.org/wiki/Burg_K%C3%B6nigstein"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5663, 50.2711]
      },
      "properties": {
        "name": "Römerkastell Saalburg",
        "start": 90,
        "end": 260,
        "style": "Roman Imperial (Military)",
        "description": "A highly fortified cohort fort along the Upper Germanic Limes, reconstructed in the late 19th century as an open-air archaeological park.",
        "url": "https://de.wikipedia.org/wiki/Kastell_Saalburg"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6806, 50.1092]
      },
      "properties": {
        "name": "St. Leonhard",
        "start": 1219,
        "end": 9999,
        "style": "Romanesque / Late Gothic",
        "description": "A Romanesque basilica originally gifted by Emperor Frederick II, located right next to the historic city wall line near the Main River.",
        "url": "https://de.wikipedia.org/wiki/St._Leonhard_(Frankfurt_am_Main)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6783, 50.1094]
      },
      "properties": {
        "name": "Karmeliterkloster",
        "start": 1246,
        "end": 9999,
        "style": "Gothic / Modern",
        "description": "The only preserved monastery complex in Frankfurt's Altstadt, hosting remarkable late medieval murals by Jörg Ratgeb and housing the Archaeological Museum.",
        "url": "https://de.wikipedia.org/wiki/Karmeliterkloster_(Frankfurt_am_Main)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6875, 50.1100]
      },
      "properties": {
        "name": "Alte Brücke",
        "start": 1222,
        "end": 9999,
        "style": "Medieval / Stone Arch",
        "description": "Frankfurt's oldest stone bridge crossing, which historically featured defensive towers and gates to control passage across the Main River.",
        "url": "https://de.wikipedia.org/wiki/Alte_Br%C3%BCcke_(Frankfurt_am_Main)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6253, 50.1581]
      },
      "properties": {
        "name": "Römerstadt Nida (Kastell Heddernheim)",
        "start": 75,
        "end": 260,
        "style": "Roman Imperial (Civitas)",
        "description": "An ancient Roman military garrison fort and administrative capital of Civitas Taunensium, once standing as a massive settlement on the modern-day northern edge of Frankfurt.",
        "url": "https://de.wikipedia.org/wiki/Nida_(r%C3%B6mische_Stadt)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5283, 50.2192]
      },
      "properties": {
        "name": "Altkönig Ringwall",
        "start": -450,
        "end": -100,
        "style": "La Tène (Celtic Ringwall)",
        "description": "A prehistoric Celtic hillfort with two concentric monumental dry-stone ring walls, sitting atop the high peak of the Altkönig in the Taunus mountains.",
        "url": "https://de.wikipedia.org/wiki/Ringwall_Altk%C3%B6nig"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.9719, 50.0436]
      },
      "properties": {
        "name": "Einhard-Basilika (Seligenstadt)",
        "start": 830,
        "end": 9999,
        "style": "Carolingian",
        "description": "One of the absolute finest surviving examples of pure Carolingian architecture north of the Alps, erected by Einhard, the personal biographer of Charlemagne.",
        "url": "https://de.wikipedia.org/wiki/Einhard-Basilika_(Seligenstadt)"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.5678, 49.6536]
      },
      "properties": {
        "name": "Königshalle Lorsch",
        "start": 880,
        "end": 9999,
        "style": "Carolingian",
        "description": "The world-famous Torhalle (Gatehouse) of the former Lorsch Abbey. A UNESCO World Heritage site and a breathtaking monument to early medieval imperial representation.",
        "url": "https://de.wikipedia.org/wiki/Kloster_Lorsch"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6942, 50.1558]
      },
      "properties": {
        "name": "Heidenmauer (Frankfurt-Sossenheim)",
        "start": 350,
        "end": 9999,
        "style": "Late Roman (Defensive)",
        "description": "Remnants of ancient late-Roman boundary and defensive wall structures positioned along early trade corridors in the Nidda river valleys.",
        "url": "https://de.wikipedia.org/wiki/Sossenheim"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.9189, 50.1331]
      },
      "properties": {
        "name": "Römerkastell Kesselstadt",
        "start": 85,
        "end": 120,
        "style": "Roman Imperial (Military)",
        "description": "One of the largest Roman auxiliary forts built during the Flavian-era campaigns to control crossings along the northern banks of the Main River.",
        "url": "https://de.wikipedia.org/wiki/Kastell_Kesselstadt"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.6531, 50.2522]
      },
      "properties": {
        "name": "Römerkastell Lochmühle",
        "start": 90,
        "end": 260,
        "style": "Roman Imperial (Limes Fort)",
        "description": "A small fortified Roman border outpost (Kleinkastell) erected to garrison troops guarding the direct pass routes over the Limes boundary line.",
        "url": "https://de.wikipedia.org/wiki/Kleinkastell_Lochm%C3%BChle"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.4831, 50.2119]
      },
      "properties": {
        "name": "Heidetränk-Oppidum",
        "start": -300,
        "end": -50,
        "style": "Late Celtic (Civic Fortification)",
        "description": "One of the largest Celtic city-complexes in Central Europe, enclosed by kilometers of massive defensive gravel-core and timber walls.",
        "url": "https://de.wikipedia.org/wiki/Heidetr%C3%A4nk-Oppidum"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.3006, 50.0461]
      },
      "properties": {
        "name": "Kastell Rheingönheim (Mainz-Kastel)",
        "start": 40,
        "end": 70,
        "style": "Early Roman Imperial (Fort)",
        "description": "The crucial early-Roman military bridgehead fortress (Castellum Mattiacorum) built directly opposite Mogontiacum to secure safe access to the interior.",
        "url": "https://de.wikipedia.org/wiki/Kastell_Rheing%C3%B6nheim"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [8.7183, 50.1136]
      },
      "properties": {
        "name": "Alt-Sachsenhausen Merovingian Graves",
        "start": 550,
        "end": 750,
        "style": "Frankish-Merovingian",
        "description": "Archaeological site of an early Frankish burial ground, proving permanent medieval settlement of the riverbanks long before Frankfurt's first formal mention.",
        "url": "https://www.archaeologisches-museum-frankfurt.de/de/merowingerzeitliche-graeberfelder"
      }
    }
  ]
}
````

## File: bug.md
````markdown
28.7.2026

i only see one monument, which is correct based on monuments.json but should there be more? this is the raw json:

{
  "serviceTitle": "WFS Denkmalschutz Hessen (INSPIRE)",
  "collectionId": "1266",
  "collectionName": "denkx:baudenkmal",
  "collectionTitle": "Baudenkmal",
  "title": "Baudenkmal",
  "id": "denkx:baudenkmal",
  "description": "Kulturdenkmal nach \u00a7 2 Abs. 1 Hessisches Denkmalschutzgesetz (HDSchG), Gr\u00fcn- und Wasserfl\u00e4chen als Kulturdenkmal nach \u00a7 2 Abs. 1 HDSchG oder Bestandteil einer Gesamtanlage nach \u00a7 2 Abs. 3 HDSchG",
  "extent": {
    "spatial": {
      "minx": "7.730786691267",
      "miny": "49.458595245119774",
      "maxx": "10.225650786092936",
      "maxy": "51.52191381136208"
    },
    "temporal": []
  },
  "type": "FeatureCollection",
  "links": [
    {
      "rel": "self",
      "type": "application\/geo+json",
      "title": "this document",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json"
    },
    {
      "rel": "next",
      "type": "application\/geo+json",
      "title": "next page",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json&offset=10&limit=10"
    },
    {
      "rel": "last",
      "type": "application\/geo+json",
      "title": "last page",
      "href": "https:\/\/www.geoportal.hessen.de\/spatial-objects\/342\/collections\/denkx:baudenkmal\/items?f=json&offset=50480&limit=10"
    }
  ],
  "numberMatched": 50483,
  "numberReturned": 10,
  "timeStamp": "2026-07-28T21:47:55.7200Z",
  "genTime": 0.24065017700195312,
  "features": [
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003011804",
        "inspireID": "LFDH01001003011804",
        "legalFoundationDocument": "<p>Dreiseitige Hofanlage, das Wohnhaus zweigeschossig mit Satteldach, Erdgeschoss massiv, Obergeschoss konstruktives Fachwerk des 19. Jhs. Fenster des freistehenden Giebels und des Erdgeschosses mit roten Sandsteingew\u00e4nden, seitlich rundbogiger Kellereingang mit Inschrift: \"Johannes Lulei 1859\". Auf dem Dach Wetterfahne mit Datierung 1903. Zu diesem Zeitpunkt vermutlich Verl\u00e4ngerung des Geb\u00e4udes nach Nordosten. Wirtschaftsgeb\u00e4ude in Fachwerk, jedoch teilweise ver\u00e4ndert. Hoffl\u00e4che noch vollst\u00e4ndig gepflastert, die Einfahrt mit Sandsteinpfeiler. Neben seiner wirtschaftsgeschichtlichen Bedeutung kommt dem Anwesen wegen seiner Lage an der Einm\u00fcndung der Alten Stra\u00dfe in die Siegfriedstra\u00dfe auch eine ortsbildpr\u00e4gende Bedeutung zu.<\/p><\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Kirschhausen_Alte Stra\u00dfe 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30118\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.68907942, 49.64618471, 8.68963754, 49.64653161],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.68959381, 49.64634832],
            [8.68963754, 49.64633235],
            [8.68959843, 49.64627569],
            [8.68949846, 49.64618471],
            [8.68939239, 49.64623687],
            [8.6895088, 49.64632985],
            [8.68952939, 49.64635454],
            [8.68928877, 49.64643788],
            [8.68920159, 49.64630046],
            [8.68907942, 49.64633314],
            [8.68920469, 49.64653161],
            [8.68931736, 49.64649361],
            [8.68932291, 49.64649173],
            [8.68956268, 49.64641099],
            [8.68957351, 49.64640725],
            [8.68954039, 49.64636778],
            [8.68959381, 49.64634832]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003011901",
        "inspireID": "LFDH01001003011901",
        "legalFoundationDocument": "<p>Granitkreuz vor dem Haus Brannackerweg 2, in erh\u00f6hter Lage auf der Einfriedungsmauer. Schwarzer Korpus, \"INRI\"-Schriftrolle, am dreiteiligen Sockel Inschrifttafel: \"Es ist vollbracht. Joh. XIX. 30.1907\". Das am 21.7.1907 geweihte Kreuz wurde von Peter Rothermel, dem Besitzer des Eckhauses, auf Anregung des Benediktinerpaters Leander Helmling, Lehrer am Hofe Franz Josefs von \u00d6sterreich, gestiftet. Ausf\u00fchrende war die Steinbruchfirma Fischer und Helmbrecht.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Kirschhausen_Brannackerweg 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30119\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.6934096, 49.64597729, 8.6934096, 49.64597729],
      "geometry": { "type": "Point", "coordinates": [8.6934096, 49.64597729] },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012004",
        "inspireID": "LFDH01001003012004",
        "legalFoundationDocument": "<div><p>Traufst\u00e4ndiges, zweigeschossiges Fachwerkwohnhaus mit steilem, aufgeschobenem Satteldach. Das Fachwerk konstruktiv, im Erdgeschoss Winkelh\u00f6lzer, das Obergeschoss mit kr\u00e4ftiger Wilde-Mann-Figuration. Im hohen Sockel rundbogiges Kellerportal mit Initialen JMF und der Jahreszahl 1574. Offensichtlich wurde das urspr\u00fcngliche Fachwerk \u00fcber dem Massivsockel in der zweiten H\u00e4lfte des 18. Jhs. grundlegend erneuert.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kellereigasse 5",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30120\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64412909, 49.64126983, 8.64427897, 49.64137419],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64417121, 49.64127323],
            [8.64417304, 49.64126983],
            [8.64427897, 49.6412872],
            [8.64424163, 49.64137419],
            [8.64412909, 49.64135591],
            [8.64417121, 49.64127323]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012104",
        "inspireID": "LFDH01001003012104",
        "legalFoundationDocument": "<div><p>Die s\u00fcd\u00f6stliche Ecke des Gro\u00dfen Marktes dominierendes Fachwerkhaus, dreigeschossig mit verputztem Erdgeschoss und Kr\u00fcppelwalmdach, das Fachwerk wohl aus der ersten H\u00e4lfte des 18. Jhs. mit Wilder-Mann-Konfiguration, eingetieften, gerahmten Rauten, Feuerb\u00f6cken sowie Andreaskreuzen in den Br\u00fcstungsfeldern.Kleine Streben teilweise mit Nasen. Geschoss\u00fcberst\u00e4nde in Balkenst\u00e4rke, profilierte Geb\u00e4lkzonen. Zum Laudenbacher Tor rundbogig geschlossenes Fenster, zur Kirchgasse Ladeneinbau sowie eingeschossiger Anbau.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 1",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30121\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64521457, 49.64136308, 8.64541414, 49.64152703],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64530578, 49.64136876],
            [8.6453096, 49.64136792],
            [8.64531039, 49.64136888],
            [8.64531636, 49.64136683],
            [8.64531799, 49.64137052],
            [8.64541414, 49.64136308],
            [8.64537136, 49.64143983],
            [8.64533599, 49.64150335],
            [8.64532281, 49.64152703],
            [8.64521457, 49.64149788],
            [8.64530841, 49.64137463],
            [8.64530578, 49.64136876]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012204",
        "inspireID": "LFDH01001003012204",
        "legalFoundationDocument": "<div><p>M\u00e4chtiger, zweigeschossiger Wohnbau mit Kr\u00fcppelwalmdach, westliche Begrenzung des Kirchplatzes, hier im massiven Erdgeschoss Eingang mit Oberlicht, datiert 1696. Daneben rundbogige Toreinfahrt. Das Obergeschoss mit kr\u00e4ftigem Fachwerk (Wilde M\u00e4nner), als Zierformen Feuerb\u00f6cke, gerundete Streben mit Nasen, zur Kirchengasse \u00fcberkreuzte Rauten. Die mit profilierten Gew\u00e4nden gezierten Fenster teilweise gekoppelt.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 3",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30122\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.6454195, 49.64137675, 8.64560052, 49.6415608],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64546685, 49.64142701],
            [8.64548781, 49.64137675],
            [8.6455102, 49.64137782],
            [8.64560052, 49.64138224],
            [8.64553667, 49.64153819],
            [8.64552698, 49.6415608],
            [8.64549885, 49.64156008],
            [8.6454195, 49.64154229],
            [8.64546685, 49.64142701]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012304",
        "inspireID": "LFDH01001003012304",
        "legalFoundationDocument": "<div><p>Giebelst\u00e4ndiges, den Kirchplatz nach Nordwesten begrenzendes Wohnhaus, zweigeschossig mit massiv erneuertem Erdgeschoss, Fachwerkobergeschoss und Satteldach. R\u00e4hm-Schwellen- Zonen mit kr\u00e4ftiger Profilierung, Mannfiguration. In der westlichen Achse des vierachsigen Baues der Eingang mit Sandsteingew\u00e4nde, im Sturz das Baudatum 1785, die Initialen FEAM, eine zentrale Rosette sowie Zahnschnittornamentik. Dar\u00fcber, im Br\u00fcstungsfeld, verglaste Nische mit der Hl. Familie in Holz.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 4",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30123\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64552415, 49.64159705, 8.64566453, 49.64167414],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.6456256, 49.64167414],
            [8.64552415, 49.64164694],
            [8.64555579, 49.64159705],
            [8.64566453, 49.64161268],
            [8.6456256, 49.64167414]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012404",
        "inspireID": "LFDH01001003012404",
        "legalFoundationDocument": "<p>In topographisch erh&ouml;hter Lage am &ouml;stlichen Ende der Kirchgasse, neben der Peterskirche gelegenes Wohnhaus, im Kern wohl 1561 erbaut, im 18. Jh. erneuert. Seit 1776 Wohnung des Kantors, zugleich Schulhaus f&uuml;r die j&uuml;ngsten Kinder. Damit das zweit&auml;lteste Schulhaus der Stadt nach dem Haus Kirchengasse 6\/8.<\/p>\r\n<p>Zweigeschossig mit Satteldach, das Erdgeschoss massiv mit rundbogigem Kellerportal (hier Scheitelstein mit Jahreszahl 1561), das Obergeschoss mit kr&auml;ftiger Mann-Figuration und Feuerbockbr&uuml;stungsmotiven. Als Abschluss der Kirchengasse auch von st&auml;dtebaulicher Bedeutung.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Hinterer Graben 1",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30124\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64672944, 49.64177033, 8.64703626, 49.64186222],
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [8.64697219, 49.64184663],
              [8.64703626, 49.6418388],
              [8.64702635, 49.6418056],
              [8.64701808, 49.64177798],
              [8.64701577, 49.64177033],
              [8.64698264, 49.64177599],
              [8.64694315, 49.64178262],
              [8.64697219, 49.64184663]
            ]
          ],
          [
            [
              [8.64672944, 49.64178472],
              [8.64673512, 49.64181036],
              [8.64673631, 49.64186222],
              [8.64688175, 49.64185934],
              [8.64690237, 49.64185886],
              [8.64697649, 49.64185738],
              [8.6469717, 49.64184694],
              [8.64694232, 49.64178293],
              [8.64694051, 49.64178295],
              [8.64689066, 49.64178341],
              [8.64672944, 49.64178472]
            ]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012504",
        "inspireID": "LFDH01001003012504",
        "legalFoundationDocument": "<p>Langgestreckter, traufst&auml;ndiger Bau n&ouml;rdlich des Kirchplatzes, zweigeschossig mit Satteldach, das Erdgeschoss teilweise massiv erneuert, das Obergeschoss in Fachwerk mit kr&auml;ftigen Mann-Figuren und gerahmten Rauten in den Br&uuml;stungsgefachen. Im Erdgeschoss Doppelt&uuml;r mit Stichb&ouml;gen und Oberlichtern, teilweise gekoppelte Fenster. Das heute zu Wohnzwecken umgebauten Geb&auml;ude gilt als &auml;lteste Schule der Stadt, die bereits 1576 hier eingerichtet wurde. Der Bau, der in seinem Kern in diese Zeit zur&uuml;ckreicht, wurde 1712 gravierend umgebaut, aus dieser Zeit datiert vermutlich das Fachwerk. Die Doppelt&uuml;r entstand vermutlich 1819, als man die Wohnung des Benefiziaten, der hier auch untergebracht war, baulich verbesserte. Die rechte T&uuml;r f&uuml;hrte dann gesondert in die Benefiziatenwohnung. Die Dachgaupen sind das Ergebnis eines Dachausbaus zu Wohnzwecken aus j&uuml;ngster Zeit.<\/p>\r\n<p>F&uuml;r die Schulgeschichte Heppenheims ist das Geb&auml;ude von besonderer Bedeutung.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 6",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30125\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64560887, 49.64161575, 8.6458735, 49.64178019],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.6458096, 49.64163645],
            [8.6456865, 49.64161575],
            [8.64561851, 49.64171389],
            [8.64561084, 49.64172384],
            [8.64560887, 49.64172779],
            [8.64562531, 49.64173324],
            [8.64562838, 49.64172992],
            [8.64563466, 49.64172293],
            [8.64567721, 49.64173808],
            [8.64568042, 49.64173414],
            [8.64570569, 49.64174284],
            [8.64571273, 49.64174529],
            [8.64576552, 49.64176353],
            [8.64575658, 49.6417743],
            [8.64577412, 49.64178019],
            [8.64578278, 49.64176952],
            [8.64581954, 49.64172001],
            [8.6458598, 49.64166566],
            [8.6458735, 49.64164718],
            [8.6458096, 49.64163645]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012604",
        "inspireID": "LFDH01001003012604",
        "legalFoundationDocument": "<p>Repr&auml;sentatives, zweigeschossiges Wohnhaus mit Walmdach, entstanden aus der Zusammenfassung zweier wohl ins Mittelalter zur&uuml;ckreichender H&auml;user, die im Kern noch vorhanden sind. Das Erscheinungsbild jedoch gepr&auml;gt durch den gravierenden Umbau um 1750 mit massivem Erdgeschoss und mit kr&auml;ftigen H&ouml;lzern konstruiertem Fachwerkobergeschoss. Mehrfach profilierte Schwelle, Mann-Figuren mit geschweiften Streben, Feuerb&ouml;cke in den Br&uuml;stungen. Zu den Eing&auml;ngen Freitreppen. Der westliche Eingang mit Sandsteinohrengew&auml;nde, Oberlicht und Jahreszahl 1567, der &ouml;stliche einfach. Durchfahrt im hohen Sockel, hier alte Fenster&ouml;ffnung. In dem Haus war zwischen 1815 und 1825 die Knabenschule untergebracht. 1864 wurde hier die Kolpingsfamilie Heppenheim gegr&uuml;ndet. Im Hof des &ouml;stlichen Hausteiles ist noch eine alte Schmiede mit den entsprechenden Einrichtungsgegenst&auml;nden erhalten.<\/p>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kirchengasse 12",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30126\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64652493, 49.6418091, 8.64673648, 49.64191007],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64673512, 49.64181036],
            [8.64673631, 49.64186222],
            [8.64673648, 49.64187975],
            [8.64668675, 49.64188239],
            [8.64664669, 49.64188358],
            [8.64663203, 49.64188402],
            [8.64663229, 49.64188699],
            [8.64663452, 49.64190606],
            [8.64653576, 49.64191007],
            [8.64652573, 49.6418317],
            [8.64652515, 49.64182724],
            [8.64652493, 49.64182545],
            [8.64667598, 49.6418091],
            [8.64673512, 49.64181036]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    },
    {
      "type": "Feature",
      "properties": {
        "gml_id": "baudenkmal.LFDH01001003012704",
        "inspireID": "LFDH01001003012704",
        "legalFoundationDocument": "<div><p>Schmales, langgestrecktes Wohnhaus an der Einm\u00fcndung der Kleinen Bach in die Marktstra\u00dfe, in seinen Proportionen ungew\u00f6hnlich mit sieben zu einer Achse. Zweigeschossig mit steilem, aufgeschobenem Satteldach, das Fachwerkobergeschoss leicht \u00fcber das massiv errichtete Erdgeschoss vorkragend. Zur Stra\u00dfe zweil\u00e4ufige Treppenanlage. Das wohl um 1800 entstandene Haus ist pr\u00e4gend f\u00fcr den Stra\u00dfenraum der unteren Marktstra\u00dfe.<\/p><\/div>",
        "siteDesignation": "baudenkmal",
        "siteName": "Bergstra\u00dfe, Landkreis_Heppenheim_Heppenheim_Kleine Bach 2",
        "siteProtectionClassification": "cultural",
        "publicationSource": "http:\/\/denkxweb.denkmalpflege-hessen.de\/30127\/",
        "designationLegalDefinition": "kulturdenkmalHE",
        "z": 2
      },
      "bbox": [8.64307434, 49.64246451, 8.64328972, 49.64266408],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [8.64315155, 49.64248566],
            [8.64311681, 49.64246451],
            [8.64307434, 49.64248029],
            [8.64310755, 49.64251896],
            [8.64312635, 49.64254078],
            [8.64317631, 49.642599],
            [8.64319007, 49.64261756],
            [8.64321318, 49.64264874],
            [8.64321735, 49.64264731],
            [8.64323106, 49.64266408],
            [8.6432761, 49.64264228],
            [8.64328862, 49.6426362],
            [8.64328972, 49.64263566],
            [8.64324713, 49.64259131],
            [8.64315155, 49.64248566]
          ]
        ]
      },
      "$schema": null,
      "$context": null
    }
  ]
}
````

## File: pipeline/build_data.py
````python
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

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: requirements.txt
````
certifi==2026.6.17
geopandas==1.1.4
numpy==2.5.1
packaging==26.2
pandas==3.0.3
pyogrio==0.13.0
pyproj==3.7.2
python-dateutil==2.9.0.post0
shapely==2.1.2
six==1.17.0
tzdata==2026.3
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

## File: src/app/layout.js
````javascript
// src/app/layout.js
import "./globals.css"; // Ensure this line is at the top!
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
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

repomix-output.md
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

/* Animated Dash Effect for Geodesic Survey Lines */
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-dash {
  animation: dash 1s linear infinite;
}
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
    "@turf/turf": "^7.3.5",
    "@vercel/analytics": "^2.0.1",
    "@vercel/speed-insights": "^2.0.0",
    "leaflet": "^1.9.4",
    "leaflet-defaulticon-compatibility": "^0.1.2",
    "next": "14.2.3",
    "proj4": "^2.20.9",
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
          8.64530578,
          49.64136876
        ]
      },
      "properties": {
        "name": "Landkreis_Heppenheim_Heppenheim_Kirchengasse 1",
        "start": 1200,
        "end": 9999,
        "style": "Baudenkmal",
        "description": "Die südöstliche Ecke des Großen Marktes dominierendes Fachwerkhaus, dreigeschossig mit verputztem Erdgeschoss und Krüppelwalmdach, das Fachwerk wohl aus der ersten Hälfte des 18. Jhs. mit Wilder-Mann-Konfiguration, eingetieften, gerahmten Rauten, Feu...",
        "url": "http://denkxweb.denkmalpflege-hessen.de/30121/"
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
  const [currentYear, setCurrentYear] = useState(1250);
  const [activeLang, setActiveLang] = useState("en"); // English default
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if Info Modal is active

  const formatYear = (year) => {
    if (year < 0) {
      return activeLang === "de" ? `${Math.abs(year)} v. Chr.` : `${Math.abs(year)} BCE`;
    }
    return activeLang === "de" ? `${year} n. Chr.` : `${year} AD`;
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-950">
      
      {/* Map Canvas - Passing the modal state callback */}
      <div className="absolute inset-0 z-0">
        <MapCanvas 
          currentYear={currentYear} 
          onLangChange={setActiveLang} 
          onModalToggle={setIsModalOpen} 
        />
      </div>

      {/* Slider Footer - Fades out elegantly when the modal is open */}
      <footer 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-xl bg-slate-950/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-slate-800/80 flex flex-col gap-2 transition-all duration-300 ${
          isModalOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 pointer-events-auto scale-100"
        }`}
      >
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium tracking-wide">
            {activeLang === "de" ? "Aktive Epoche" : "Active Era"}
          </span>
          <span className="text-emerald-400 font-bold text-lg tracking-wider">
            {formatYear(currentYear)}
          </span>
        </div>
        <input
          type="range"
          min="-450"
          max="2026"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
        />
      </footer>

    </main>
  );
}
````

## File: README.md
````markdown
# Tempus (Hessen Historica)

An interactive, spatiotemporal Web GIS application designed to visualize the evolution of historical fortifications, castles, and defensive walls in Frankfurt am Main and the surrounding Hessen region.

This project demonstrates the core competencies required of a modern **Geomatiker** or **Geoinformatiker**, bridging the gap between traditional geodesy, chronological database queries, and modern web-based cartography.

---

## Live Demo

🔗 [https://tempusgeo.vercel.app/](https://tempusgeo.vercel.app/)

---

## Project Overview & Objective

The objective of **Tempus** is to show how historical spatial-temporal datasets can be visualized dynamically. Rather than relying on static paper maps, this application allows users to slide through centuries of history (from **450 BCE** to **1900 AD**) to see defensive landmarks appear, change, and disappear in real-time as the geopolitical landscape of Frankfurt evolved.

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

### 1. Interactive Timeline Slider (450 BCE – 1900 AD)

* A custom slider interface filtering live geographic features across a range starting in the early Roman era (**450 BCE**) up to the industrial era (**1900 AD**).
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

**Nadra Qamaria** 📍 Frankfurt am Main, Germany

📧 [qamaria.mdsah@gmail.com](https://www.google.com/search?q=mailto%3Aqamaria.mdsah%40gmail.com)

🔗 [LinkedIn Profile](https://linkedin.com/in/nadraqamaria)
````

## File: src/components/MapCanvas.jsx
````javascript
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
      "Tempus is an interactive spatiotemporal Web GIS application showcasing the historical evolution of fortifications and defensive works in Hessen from 450 BCE to 1900 AD. Designed to demonstrate modern geomatics, spatial database filtering, and geodesy principles.",
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
      "Tempus ist eine interaktive raum-zeitliche Web-GIS-Anwendung, die die historische Entwicklung von Befestigungsanlagen und Wehrbauten in Hessen von 450 v. Chr. bis 1900 n. Chr. visualisiert. Entwickelt, um moderne Geomatik, räumliche Datenbankfilterung und Geodäsie-Prinzipien zu demonstrieren.",
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

  // Modify setInfoOpen triggers to notify the parent layout
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
    setLang(newLang); // Updates local state in MapCanvas
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
                      alt="Nadra Qamaria"
                      className="w-8 h-8 rounded-full border border-slate-700/80 object-cover shadow-sm bg-slate-900"
                      onError={(e) => {
                        e.target.src =
                          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-slate-200">
                      Nadra Qamaria
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
````
