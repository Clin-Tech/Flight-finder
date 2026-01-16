import axios from "axios";

export async function searchLocations(keyword, signal) {
  const res = await axios.get("/api/locations/search", {
    params: { keyword },
    signal,
  });

  if (typeof res.data === "string") {
    throw new Error("Locations API returned HTML (wrong routing).");
  }
  return res.data.data || [];
}
