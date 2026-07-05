// Completes the GitHub OAuth flow for Decap CMS.
// Exchanges the ?code for an access token, then hands it back to the
// Decap admin window using its expected postMessage handshake.
export default async function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send("Missing GitHub OAuth environment variables.");
    return;
  }

  const { code, state } = req.query;

  // Verify the state cookie set in /api/auth.
  const cookie = req.headers.cookie || "";
  const savedState = cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("oauth_state="))
    ?.split("=")[1];

  if (!code || !state || !savedState || state !== savedState) {
    res.status(400).send("Invalid OAuth state. Please try logging in again.");
    return;
  }

  const result = await exchangeCode({ clientId, clientSecret, code });

  const status = result.token ? "success" : "error";
  const payload = result.token
    ? { token: result.token, provider: "github" }
    : { message: result.error || "Failed to obtain access token." };

  // Clear the state cookie.
  res.setHeader("Set-Cookie", [
    "oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0",
  ]);
  res.setHeader("Content-Type", "text/html");
  res.end(renderPage(status, payload));
}

async function exchangeCode({ clientId, clientSecret, code }) {
  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await response.json();
    if (data.access_token) return { token: data.access_token };
    return { error: data.error_description || data.error || "unknown_error" };
  } catch (err) {
    return { error: err.message };
  }
}

// The message string format Decap/Netlify CMS listens for.
function renderPage(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><head><meta charset="utf-8" /><title>Authorizing…</title></head>
<body>
  <p>Completing sign-in… you can close this window if it does not close automatically.</p>
  <script>
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin);
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body></html>`;
}
