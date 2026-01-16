let cached = { token: null, expiresAt: 0 };

export function invalidateToken() {
  cached.token = null;
  cached.expiresAt = 0;
}

async function fetchToken() {
  const clientId = (process.env.AMADEUS_CLIENT_ID || "").trim();
  const clientSecret = (process.env.AMADEUS_CLIENT_SECRET || "").trim();

  if (!clientId || !clientSecret) {
    throw Object.assign(
      new Error("Missing AMADEUS_CLIENT_ID / AMADEUS_CLIENT_SECRET"),
      {
        status: 500,
      }
    );
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const r = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }
  );

  const text = await r.text();

  if (!r.ok) {
    throw Object.assign(new Error("Token request failed"), {
      status: r.status,
      upstream: text,
    });
  }

  const data = JSON.parse(text);
  const token = String(data.access_token || "").trim();

  if (!token) {
    throw Object.assign(new Error("Token missing in response"), {
      upstream: text,
    });
  }

  cached.token = token;
  cached.expiresAt = Date.now() + (Number(data.expires_in || 0) - 30) * 1000;
  return token;
}

export async function getToken() {
  if (cached.token && Date.now() < cached.expiresAt) return cached.token;
  return fetchToken();
}
