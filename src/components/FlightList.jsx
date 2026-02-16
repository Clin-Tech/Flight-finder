import { Plane, Clock, ArrowRight } from "lucide-react";

const FlightCard = ({ flight, onSelect, onSelectCta }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(flight)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect?.(flight);
      }}
      className="flight-card w-full text-left cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-midnight-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-midnight-100 transition-colors">
              <Plane className="w-5 h-5 text-midnight-700" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-midnight-900 truncate">
                {flight.airline}
              </h3>
              <p className="text-sm text-gray-400 font-mono">
                {flight.flightNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="text-left">
              <p className="text-lg font-display font-bold text-midnight-900">
                {flight.departureTime}
              </p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                {flight.origin}
              </p>
            </div>

            <div className="flex-1 flex items-center gap-2 min-w-0 px-2">
              <div className="flex-1 h-px bg-gray-200 group-hover:bg-midnight-200 transition-colors"></div>
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <Clock className="w-3.5 h-3.5 text-gray-300" />
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {flight.duration}
                </span>
              </div>
              <div className="flex-1 relative">
                <div className="h-px bg-gray-200 group-hover:bg-midnight-200 transition-colors"></div>
                <ArrowRight className="w-3 h-3 text-gray-300 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-display font-bold text-midnight-900">
                {flight.arrivalTime}
              </p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                {flight.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-4 text-sm">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-midnight-50 text-midnight-700 text-xs font-semibold">
              {flight.stops === 0
                ? "Nonstop"
                : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </span>
            <span className="text-gray-300 text-xs">&bull;</span>
            <span className="text-gray-500 text-xs">{flight.cabinClass}</span>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 md:pl-6 md:border-l md:border-gray-100">
          <div className="text-right">
            <p className="text-3xl font-display font-bold text-midnight-900">
              ${flight.price}
            </p>
            <p className="text-xs text-gray-400 font-medium">{flight.currency}</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCta?.(flight);
            }}
            className="bg-midnight-900 text-white px-6 py-2.5 rounded-xl hover:bg-midnight-800 hover:shadow-lg hover:shadow-midnight-900/20 transition-all duration-200 whitespace-nowrap text-sm font-semibold"
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
      <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Plane className="w-8 h-8 text-gray-300" />
        </div>
        <h3 className="text-lg font-display font-semibold text-midnight-900 mb-2">
          No flights found
        </h3>
        <p className="text-gray-400">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500 font-medium">
          {flights.length} flight{flights.length !== 1 ? "s" : ""} found
        </p>
      </div>
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
