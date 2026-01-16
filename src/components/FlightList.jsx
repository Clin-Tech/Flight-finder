import { Plane, Clock } from "lucide-react";

const FlightCard = ({ flight, onSelect, onSelectCta }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(flight)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect?.(flight);
      }}
      className="flight-card w-full text-left hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Plane className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {flight.airline}
              </h3>
              <p className="text-sm text-gray-500">{flight.flightNumber}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="text-left">
              <p className="font-semibold text-gray-900">
                {flight.departureTime}
              </p>
              <p className="text-gray-500">{flight.origin}</p>
            </div>

            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {flight.duration}
                </span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-gray-900">
                {flight.arrivalTime}
              </p>
              <p className="text-gray-500">{flight.destination}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100">
              {flight.stops === 0
                ? "Nonstop"
                : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </span>
            <span>{flight.cabinClass}</span>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3">
          <div className="text-right">
            <p className="text-3xl font-bold text-indigo-600">
              ${flight.price}
            </p>
            <p className="text-sm text-gray-500">{flight.currency}</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCta?.(flight);
            }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

const FlightList = ({ flights, onSelectFlight, onSelectCta }) => {
  if (flights.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <Plane className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No flights found
        </h3>
        <p className="text-gray-500">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          onSelect={onSelectFlight}
          onSelectCta={onSelectCta}
        />
      ))}
    </div>
  );
};

export default FlightList;
