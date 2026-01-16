import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

export default function ErrorBanner({
  title = "Request failed",
  message,
  onRetry,
}) {
  return (
    <div className="mb-6">
      <Alert
        severity="error"
        action={
          onRetry ? (
            <Button color="inherit" size="small" onClick={onRetry}>
              Retry
            </Button>
          ) : null
        }
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}
