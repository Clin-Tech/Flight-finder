import { Search, Calendar, Users } from "lucide-react";
import AirportAutocomplete from "./AirportAutocomplete";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const todayISO = () => new Date().toISOString().split("T")[0];

const SearchForm = ({ searchParams, setSearchParams, onSearch, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-1">
          <AirportAutocomplete
            label="From"
            placeholder="Search city or airport..."
            value={searchParams.origin}
            onChange={(iata) =>
              setSearchParams((p) => ({ ...p, origin: iata }))
            }
          />
        </div>

        <div className="lg:col-span-1">
          <AirportAutocomplete
            label="To"
            placeholder="Search city or airport..."
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
              borderRadius: 2,
              py: 1.2,
            }}
          >
            {loading ? "Searching..." : "Search Flights"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
