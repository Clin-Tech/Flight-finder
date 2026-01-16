export function normalizeError(err) {
  const status = err?.response?.status;
  const data = err?.response?.data;

  let upstream = null;
  if (typeof data === "string") {
    try {
      upstream = JSON.parse(data);
    } catch {}
  } else if (data?.errors) {
    upstream = data;
  }

  const wrapped = data?.upstreamBody;

  const msg =
    wrapped?.errors?.[0]?.title ||
    upstream?.errors?.[0]?.title ||
    upstream?.errors?.[0]?.detail ||
    data?.message ||
    err?.message ||
    "Something went wrong";

  return {
    status,
    message: msg,
    raw: data,
  };
}
