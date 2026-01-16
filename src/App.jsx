import { useState, useMemo, useCallback } from "react";
import { Plane } from "lucide-react";
import SearchForm from "./components/SearchForm";
import PriceGraph from "./components/PriceGraph";
import FilterPanel from "./components/FilterPanel";
import FlightList from "./components/FlightList";
import { searchFlights, parseFlightOffer, getAirlineName } from "./api/amadeus";

import ErrorBanner from "./components/ErrorBanner";
import EmptyState from "./components/EmptyState";
import FlightDetailsModal from "./components/FlightDetailsModal";
import {
  PriceGraphSkeleton,
  FilterPanelSkeleton,
  FlightListSkeleton,
} from "./components/LoadingSkeletons";

import { normalizeError } from "./utils/normalizeError";

function App() {
  const formatDate = (d) => d.toISOString().slice(0, 10);
  const addDays = (n) => {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d;
  };

  const [searchParams, setSearchParams] = useState({
    origin: "",
    destination: "",
    departureDate: formatDate(addDays(14)),
    returnDate: formatDate(addDays(21)),
    passengers: 0,
  });

  const [filters, setFilters] = useState({
    maxPrice: 2000,
    stops: [],
    airlines: [],
    priceRange: [0, 2000],
  });

  const [flights, setFlights] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleSearch = useCallback(async () => {
    if (
      !searchParams.origin ||
      !searchParams.destination ||
      !searchParams.departureDate
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError(null);
    setFlights([]);

    try {
      const results = await searchFlights({
        origin: searchParams.origin,
        destination: searchParams.destination,
        departureDate: searchParams.departureDate,
        returnDate: searchParams.returnDate || null,
        adults: searchParams.passengers,
      });

      if (!results || results.length === 0) {
        setError("No flights found for this route");
        setHasSearched(true);
        setLoading(false);
        return;
      }

      const parsedFlights = results.map((offer) => {
        const parsed = parseFlightOffer(offer);
        return {
          ...parsed,
          airline: getAirlineName(parsed.airline),
        };
      });

      setFlights(parsedFlights);
      setHasSearched(true);

      const prices = parsedFlights?.map((f) => f.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setFilters((prev) => ({
        ...prev,
        priceRange: [minPrice, maxPrice],
        maxPrice: maxPrice,
      }));
    } catch (err) {
      console.error("Search error:", err);
      const e = normalizeError(err);

      if (e.status === 401) {
        setError("Auth failed (401). Check your Amadeus credentials / token.");
      } else if (e.status === 429) {
        setError("Rate limited (429). Pause 10–20s and try again.");
      } else {
        setError(e.message || "Failed to search flights.");
      }

      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const priceMatch =
        flight.price >= filters.priceRange[0] &&
        flight.price <= filters.priceRange[1];
      const stopsMatch =
        filters.stops.length === 0 || filters.stops.includes(flight.stops);
      const airlineMatch =
        filters.airlines.length === 0 ||
        filters.airlines.includes(flight.airline);

      return priceMatch && stopsMatch && airlineMatch;
    });
  }, [flights, filters]);

  const priceGraphData = useMemo(() => {
    if (filteredFlights.length === 0) return [];

    const priceStep = 50;
    const groupedByPrice = filteredFlights.reduce((acc, flight) => {
      const priceRange = Math.floor(flight.price / priceStep) * priceStep;
      if (!acc[priceRange]) {
        acc[priceRange] = { price: priceRange, count: 0 };
      }
      acc[priceRange].count++;
      return acc;
    }, {});

    return Object.values(groupedByPrice).sort((a, b) => a.price - b.price);
  }, [filteredFlights]);

  const airlines = useMemo(() => {
    return [...new Set(flights.map((f) => f.airline))].sort();
  }, [flights]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Plane className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">FlightFinder</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <ErrorBanner
            title="Couldn’t complete search"
            message={error}
            onRetry={handleSearch}
          />
        )}

        {!hasSearched && !loading && !error && <EmptyState />}

        {loading && (
          <>
            <PriceGraphSkeleton />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <FilterPanelSkeleton />
              </div>
              <div className="lg:col-span-3">
                <FlightListSkeleton count={6} />
              </div>
            </div>
          </>
        )}

        {hasSearched && !loading && !error && (
          <>
            <PriceGraph
              data={priceGraphData}
              flightCount={filteredFlights.length}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  airlines={airlines}
                  maxPrice={filters.maxPrice}
                />
              </div>

              <div className="lg:col-span-3">
                <FlightList
                  flights={filteredFlights}
                  onSelectFlight={(flight) => {
                    setSelectedFlight(flight);
                    setDetailsOpen(true);
                  }}
                />
              </div>
            </div>
            <FlightDetailsModal
              open={detailsOpen}
              onClose={() => setDetailsOpen(false)}
              flight={selectedFlight}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
