# Notes

## Project Overview
Birdly is a single-page web application that allows users to explore bird species, view recent sightings, and report their own observations.

---

## User Problem
Bird watchers often struggle to find a simple and centralized platform to:
- Explore bird species
- View recent sightings in their area
- Track their own observations

---

## App Structure
- Single Page Application (SPA)
- Views:
  - Home (hero section + recent sightings)
  - Explore (bird gallery + search)
  - Report (form for sightings)

---

## Data Strategy

### Local Data
- Bird data will be stored in a JavaScript array
- Each object includes:
  - name
  - image
  - description

### API Data
- Recent sightings will be fetched from eBird API
- Data will include:
  - bird name
  - location
  - date/time

---

## API Research
- eBird API provides real-time bird observation data
- Requires API key
- Will use Vercel environment variables to store API key securely
- Will create a serverless function to fetch data

---

## Key Features
- Dynamic rendering of bird cards
- Real-time search filtering
- Live API widget for sightings
- Form validation for reporting sightings
- Use of localStorage to save user input

---

## Design Decisions
- Use soft green color palette for nature theme
- Hero section with background image for visual impact
- Cards layout for bird gallery
- Simple and clean UI for usability

