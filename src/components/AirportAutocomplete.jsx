import { useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { MapPin } from "lucide-react";
import { AIRPORTS } from "../data/airports";

const norm = (s) =>
  String(s || "")
    .toLowerCase()
    .trim();

function makeLabel(a) {
  return `${a.cityName} — ${a.name} (${a.iataCode})`;
}

export default function AirportAutocomplete({
  label,
  value,
  onChange,
  placeholder,
}) {
  const [inputValue, setInputValue] = useState("");

  const selectedOption = useMemo(() => {
    if (!value) return null;
    return AIRPORTS.find((a) => a.iataCode === value) || null;
  }, [value]);

  return (
    <Autocomplete
      options={AIRPORTS}
      value={selectedOption}
      inputValue={inputValue}
      onInputChange={(_, v) => setInputValue(v)}
      onChange={(_, opt) => {
        onChange(opt?.iataCode || "");
        setInputValue(opt ? makeLabel(opt) : "");
      }}
      getOptionLabel={(opt) => (opt ? makeLabel(opt) : "")}
      isOptionEqualToValue={(opt, val) => opt.iataCode === val.iataCode}
      autoHighlight
      blurOnSelect
      clearOnBlur
      handleHomeEndKeys
      filterOptions={(opts, state) => {
        const q = norm(state.inputValue);
        if (q.length < 1) return opts.slice(0, 10);

        const res = opts.filter((a) => {
          const hay = [
            a.iataCode,
            a.name,
            a.cityName,
            a.countryName,
            a.detailedName,
          ]
            .map(norm)
            .join(" ");
          return hay.includes(q);
        });

        return res.slice(0, 10);
      }}
      renderOption={(props, opt) => (
        <li {...props} key={opt.iataCode}>
          <div className="flex flex-col">
            <div className="font-medium text-gray-900">
              {opt.cityName}{" "}
              <span className="text-gray-500">({opt.iataCode})</span>
            </div>
            <div className="text-xs text-gray-500">
              {opt.name} • {opt.countryName}
            </div>
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          size="small"
          onBlur={() => {
            const valid = AIRPORTS.some(
              (a) =>
                norm(makeLabel(a)) === typed ||
                norm(a.iataCode) === typed ||
                norm(a.cityName) === typed
            );

            if (!valid && !value) setInputValue("");
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <MapPin className="w-4 h-4 text-gray-400" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
