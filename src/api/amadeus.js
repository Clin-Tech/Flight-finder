import axios from "axios";

export const searchFlights = async ({
  origin,
  destination,
  departureDate,
  adults = 1,
  returnDate = null,
}) => {
  const res = await axios.get("/api/flights/search", {
    params: { origin, destination, departureDate, returnDate, adults },
  });
  return res.data.data || [];
};

// (keep your parseFlightOffer + getAirlineName as-is for now)
export const parseFlightOffer = (offer) => {
  const firstSegment = offer.itineraries[0].segments[0];
  const lastSegment =
    offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1];

  return {
    id: offer.id,
    price: parseFloat(offer.price.total),
    currency: offer.price.currency,
    airline: firstSegment.carrierCode,
    flightNumber: `${firstSegment.carrierCode}${firstSegment.number}`,
    origin: firstSegment.departure.iataCode,
    destination: lastSegment.arrival.iataCode,
    departAt: firstSegment.departure.at, // add raw time for better charting
    arrivalAt: lastSegment.arrival.at,
    departureTime: new Date(firstSegment.departure.at).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }
    ),
    arrivalTime: new Date(lastSegment.arrival.at).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    duration: offer.itineraries[0].duration,
    stops: offer.itineraries[0].segments.length - 1,
    cabinClass: "ECONOMY",
  };
};

export const getAirlineName = (code) => {
  const airlines = {
    AA: "American Airlines",
    DL: "Delta Air Lines",
    UA: "United Airlines",
    WN: "Southwest Airlines",
    B6: "JetBlue Airways",
    AS: "Alaska Airlines",
    NK: "Spirit Airlines",
    F9: "Frontier Airlines",
  };
  return airlines[code] || code;
};
