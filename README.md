# FlightFinder ✈️ (Amadeus + Vite + Vercel)

A lightweight flight search UI that calls **Amadeus Self-Service APIs** through **Vercel Serverless Functions**, then visualizes results with filters, price distribution, and a flight details modal.

---

## Live Demo
- Deployed URL: https://spotter-flight-search-engine.vercel.app
- Loom walkthrough: https://www.loom.com/share/c6b51c50d24744f9a62c0f62726bfe1f

---

## Features
- **Flight search** (one-way or return)
- **Airport selection** (IATA codes via `AIRPORTS` dataset)
- **Filters**
  - Price range slider
  - Stops (nonstop / 1 stop / 2 stops)
  - Airline selection
- **Price distribution graph** (Recharts)
- **Flight details modal** (click a flight card)
- **Loading skeletons**
- **Better error UI** (friendly message + retry)
- **Empty state content** before first search
- **Vercel Analytics** (React entry)

---

## Tech Stack
- **Frontend:** React + Vite, Tailwind CSS, Material UI (MUI)
- **Charts:** Recharts
- **Icons:** lucide-react
- **HTTP:** axios
- **Backend (serverless):** Vercel Functions (`/api/*`)
- **Flight data:** Amadeus Self-Service APIs (Test environment)

---

## Project Structure (high level)
```txt
.
├─ api/
│  ├─ _token.js              # OAuth token fetch + in-memory cache
│  ├─ flights/
│  │  └─ search.js           # Calls Amadeus flight offers endpoint
│  └─ locations/
│     └─ search.js           # Airport/city search endpoint
├─ src/
│  ├─ api/
│  │  └─ amadeus.js          # client calls to /api/flights/search
│  ├─ components/
│  │  ├─ SearchForm.jsx
│  │  ├─ FlightList.jsx
│  │  ├─ FlightDetailsModal.jsx
│  │  ├─ ErrorBanner.jsx
│  │  ├─ EmptyState.jsx
│  │  └─ LoadingSkeletons.jsx
│  ├─ data/
│  │  └─ airports.js         
│  └─ App.jsx
└─ README.md
