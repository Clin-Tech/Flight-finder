import { SlidersHorizontal, X } from "lucide-react";

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

  const hasActiveFilters =
    filters.stops.length > 0 ||
    filters.airlines.length > 0 ||
    filters.priceRange[1] < maxPrice;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-display font-bold text-midnight-900 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-xs text-midnight-600 hover:text-midnight-800 font-semibold flex items-center gap-1 px-2 py-1 rounded-md hover:bg-midnight-50 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Price range */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Max Price
        </label>
        <div className="text-2xl font-display font-bold text-midnight-900 mb-3">
          ${filters.priceRange[1]}
        </div>
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
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1.5">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Stops */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Stops
        </label>
        <div className="space-y-2">
          {[0, 1, 2].map((stop) => (
            <label
              key={stop}
              className="flex items-center gap-2.5 cursor-pointer group px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors -mx-2"
            >
              <input
                type="checkbox"
                checked={filters.stops.includes(stop)}
                onChange={() => handleStopToggle(stop)}
                className="w-4 h-4 accent-midnight-700 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-midnight-900 transition-colors">
                {stop === 0
                  ? "Nonstop"
                  : `${stop} stop${stop > 1 ? "s" : ""}`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Airlines */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Airlines
        </label>
        <div className="max-h-48 overflow-y-auto space-y-1">
          {airlines.map((airline) => (
            <label
              key={airline}
              className="flex items-center gap-2.5 cursor-pointer group px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors -mx-2"
            >
              <input
                type="checkbox"
                checked={filters.airlines.includes(airline)}
                onChange={() => handleAirlineToggle(airline)}
                className="w-4 h-4 accent-midnight-700 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-midnight-900 truncate transition-colors">
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
