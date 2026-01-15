import { Search, MapPin, Calendar, Users } from "lucide-react";

const SearchForm = ({ searchParams, setSearchParams, onSearch, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchParams.origin}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  origin: e.target.value.toUpperCase(),
                })
              }
              className="input-field pl-10"
              placeholder="JFK"
              maxLength={3}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchParams.destination}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  destination: e.target.value.toUpperCase(),
                })
              }
              className="input-field pl-10"
              placeholder="LAX"
              maxLength={3}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Departure
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={searchParams.departureDate}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  departureDate: e.target.value,
                })
              }
              className="input-field pl-10"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={searchParams.returnDate}
              onChange={(e) =>
                setSearchParams({ ...searchParams, returnDate: e.target.value })
              }
              className="input-field pl-10"
              min={searchParams.departureDate}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="number"
              min="1"
              max="9"
              value={searchParams.passengers}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  passengers: parseInt(e.target.value) || 1,
                })
              }
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button
            onClick={onSearch}
            disabled={
              loading || !searchParams.origin || !searchParams.destination
            }
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            {loading ? "Searching..." : "Search Flights"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
