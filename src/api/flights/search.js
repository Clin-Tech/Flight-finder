import { getToken } from "../_token.js";

function pickQuery(req) {
  const q = req.query || {};
  return {
    origin: (q.origin || "").toString().trim().toUpperCase(),
    destination: (q.destination || "").toString().trim().toUpperCase(),
    departureDate: (q.departureDate || "").toString().trim(),
    returnDate: (q.returnDate || "").toString().trim(),
    adults: Math.max(1, Math.min(9, Number(q.adults || 1))),
  };
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const { origin, destination, departureDate, returnDate, adults } =
    pickQuery(req);

  if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
    return res
      .status(400)
      .send("origin/destination must be 3-letter IATA codes");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(departureDate)) {
    return res.status(400).send("departureDate must be YYYY-MM-DD");
  }

  const token = await getToken();

  const url = new URL("https://test.api.amadeus.com/v2/shopping/flight-offers");
  url.searchParams.set("originLocationCode", origin);
  url.searchParams.set("destinationLocationCode", destination);
  url.searchParams.set("departureDate", departureDate);
  url.searchParams.set("adults", String(adults));
  url.searchParams.set("max", "50");
  if (returnDate && /^\d{4}-\d{2}-\d{2}$/.test(returnDate)) {
    url.searchParams.set("returnDate", returnDate);
  }

  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });

  if (!r.ok) {
    const text = await r.text();
    return res.status(502).send(text);
  }

  const data = await r.json();
  return res.status(200).json({ data: data.data || [] });
}
