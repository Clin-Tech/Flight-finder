import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { X } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-sm font-medium text-gray-900 text-right">
        {value}
      </div>
    </div>
  );
}

export default function FlightDetailsModal({ open, onClose, flight }) {
  if (!flight) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-semibold text-gray-900 truncate">
              {flight.airline} • {flight.flightNumber}
            </div>
            <div className="text-sm text-gray-500">
              {flight.origin} → {flight.destination}
            </div>
          </div>

          <IconButton onClick={onClose} aria-label="close">
            <X className="w-5 h-5" />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent>
        <div className="flex items-center gap-2 mb-4">
          <Chip
            label={flight.stops === 0 ? "Nonstop" : `${flight.stops} stop(s)`}
          />
          <Chip label={flight.cabinClass} variant="outlined" />
          <Chip
            label={`${flight.currency} ${flight.price}`}
            color="primary"
            variant="outlined"
          />
        </div>

        <Divider className="!my-3" />

        <Row label="Depart (local)" value={flight.departureTime} />
        <Row label="Arrive (local)" value={flight.arrivalTime} />
        <Row label="Duration" value={flight.duration} />
        <Row label="Departure ISO" value={flight.departAt} />
        <Row label="Arrival ISO" value={flight.arrivalAt} />
      </DialogContent>
    </Dialog>
  );
}
