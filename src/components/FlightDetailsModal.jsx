import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { X, Plane, Clock, Calendar } from "lucide-react";

function Row({ label, value, icon: Icon }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {label}
      </div>
      <div className="text-sm font-semibold text-midnight-900 text-right font-body">
        {value}
      </div>
    </div>
  );
}

export default function FlightDetailsModal({ open, onClose, flight }) {
  if (!flight) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          fontFamily: '"DM Sans", system-ui, sans-serif',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-midnight-50 flex items-center justify-center flex-shrink-0">
              <Plane className="w-5 h-5 text-midnight-700" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-midnight-900 truncate text-lg">
                {flight.airline}
              </div>
              <div className="text-sm text-gray-400 font-body">
                {flight.flightNumber} &middot; {flight.origin} &rarr;{" "}
                {flight.destination}
              </div>
            </div>
          </div>

          <IconButton
            onClick={onClose}
            aria-label="close"
            sx={{
              bgcolor: "#f8fafc",
              "&:hover": { bgcolor: "#f1f5f9" },
              width: 36,
              height: 36,
            }}
          >
            <X className="w-4 h-4" />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent>
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Chip
            label={
              flight.stops === 0 ? "Nonstop" : `${flight.stops} stop(s)`
            }
            size="small"
            sx={{
              bgcolor: "#f0f4ff",
              color: "#1e3a5f",
              fontWeight: 600,
              fontFamily: '"DM Sans", system-ui',
              borderRadius: "8px",
            }}
          />
          <Chip
            label={flight.cabinClass}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "8px",
              fontFamily: '"DM Sans", system-ui',
            }}
          />
          <Chip
            label={`${flight.currency} ${flight.price}`}
            size="small"
            sx={{
              bgcolor: "#0f172a",
              color: "#fff",
              fontWeight: 700,
              fontFamily: '"DM Sans", system-ui',
              borderRadius: "8px",
            }}
          />
        </div>

        <Divider sx={{ my: 2 }} />

        <Row label="Depart (local)" value={flight.departureTime} icon={Clock} />
        <Row label="Arrive (local)" value={flight.arrivalTime} icon={Clock} />
        <Row label="Duration" value={flight.duration} icon={Calendar} />
        <Row label="Departure ISO" value={flight.departAt} />
        <Row label="Arrival ISO" value={flight.arrivalAt} />
      </DialogContent>
    </Dialog>
  );
}
