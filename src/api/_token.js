let cached = { token: null, expiresAt: 0 };

async function fetchToken() {
  const clientId = process.env.AMADEUS_CLIENT_ID;
  const clientSecret = process.env.AMADEUS_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing AMADEUS_CLIENT_ID / AMADEUS_CLIENT_SECRET");
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

  if (!r.ok) throw new Error(await r.text());

  const data = await r.json();
  cached.token = data.access_token;
  cached.expiresAt = Date.now() + (data.expires_in - 30) * 1000;
  return cached.token;
}

export async function getToken() {
  if (cached.token && Date.now() < cached.expiresAt) return cached.token;
  return fetchToken();
}
