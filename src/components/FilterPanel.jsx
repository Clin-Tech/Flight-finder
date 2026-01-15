import { Filter } from "lucide-react";

const FilterPanel = ({ filters, setFilters, airlines, maxPrice }) => {
  const handleClearFilters = () => {
    setFilters({
      maxPrice: maxPrice,
      stops: [],
      airlines: [],
      priceRange: [0, maxPrice],
    });
  };

  const handleStopToggle = (stop) => {
    setFilters((prev) => ({
      ...prev,
      stops: prev.stops.includes(stop)
        ? prev.stops.filter((s) => s !== stop)
        : [...prev.stops, stop],
    }));
  };

  const handleAirlineToggle = (airline) => {
    setFilters((prev) => ({
      ...prev,
      airlines: prev.airlines.includes(airline)
        ? prev.airlines.filter((a) => a !== airline)
        : [...prev.airlines, airline],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h2>
        <button
          onClick={handleClearFilters}
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Max Price: ${filters.priceRange[1]}
        </label>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [0, parseInt(e.target.value)],
            })
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Stops Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Stops
        </label>
        <div className="space-y-2">
          {[0, 1, 2].map((stop) => (
            <label
              key={stop}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.stops.includes(stop)}
                onChange={() => handleStopToggle(stop)}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {stop === 0 ? "Nonstop" : `${stop} stop${stop > 1 ? "s" : ""}`}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Airlines
        </label>
        <div className="max-h-48 overflow-y-auto space-y-2">
          {airlines.map((airline) => (
            <label
              key={airline}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.airlines.includes(airline)}
                onChange={() => handleAirlineToggle(airline)}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 truncate">
                {airline}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
