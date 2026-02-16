import { Search, Calendar, Users, ArrowRightLeft } from "lucide-react";
import AirportAutocomplete from "./AirportAutocomplete";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const todayISO = () => new Date().toISOString().split("T")[0];

const SearchForm = ({ searchParams, setSearchParams, onSearch, loading }) => {
  const swapCities = () => {
    setSearchParams((p) => ({
      ...p,
      origin: p.destination,
      destination: p.origin,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-midnight-900/5 border border-gray-100 p-6 md:p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-midnight-900 flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-midnight-900 text-lg">
            Search Flights
          </h3>
          <p className="text-sm text-gray-400">
            Compare real-time prices from 200+ airlines
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        <div className="lg:col-span-1">
          <AirportAutocomplete
            label="From"
            placeholder="City or airport..."
            value={searchParams.origin}
            onChange={(iata) =>
              setSearchParams((p) => ({ ...p, origin: iata }))
            }
          />
        </div>

        {/* Swap button (visible on larger screens between from/to) */}
        <div className="hidden lg:flex lg:col-span-0 items-center justify-center -mx-3 self-center">
          <button
            onClick={swapCities}
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-midnight-50 border border-gray-200 hover:border-midnight-200 flex items-center justify-center transition-all duration-200 hover:rotate-180"
            title="Swap cities"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </div>

        <div className="lg:col-span-1">
          <AirportAutocomplete
            label="To"
            placeholder="City or airport..."
            value={searchParams.destination}
            onChange={(iata) =>
              setSearchParams((p) => ({ ...p, destination: iata }))
            }
          />
        </div>

        <div className="lg:col-span-1">
          <TextField
            label="Departure"
            type="date"
            size="small"
            fullWidth
            value={searchParams.departureDate}
            onChange={(e) =>
              setSearchParams((p) => ({ ...p, departureDate: e.target.value }))
            }
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: todayISO() }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="lg:col-span-1">
          <TextField
            label="Return"
            type="date"
            size="small"
            fullWidth
            value={searchParams.returnDate}
            onChange={(e) =>
              setSearchParams((p) => ({ ...p, returnDate: e.target.value }))
            }
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: searchParams.departureDate || todayISO() }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="lg:col-span-1">
          <TextField
            label="Passengers"
            type="number"
            size="small"
            fullWidth
            value={searchParams.passengers}
            onChange={(e) =>
              setSearchParams((p) => ({
                ...p,
                passengers: Math.max(
                  1,
                  Math.min(9, Number(e.target.value) || 1)
                ),
              }))
            }
            inputProps={{ min: 1, max: 9 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Users className="w-4 h-4 text-gray-400" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="lg:col-span-1 flex items-end">
          <Button
            onClick={onSearch}
            disabled={
              loading || !searchParams.origin || !searchParams.destination
            }
            fullWidth
            variant="contained"
            startIcon={<Search className="w-5 h-5" />}
            sx={{
              textTransform: "none",
              borderRadius: 3,
              py: 1.2,
              fontSize: "0.95rem",
            }}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
