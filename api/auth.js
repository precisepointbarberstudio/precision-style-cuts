import crypto from "node:crypto";

// Starts the GitHub OAuth flow for Decap CMS.
// Redirects the CMS popup to GitHub's authorization screen.
export default function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("Missing GITHUB_OAUTH_CLIENT_ID environment variable.");
    return;
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;

  const state = crypto.randomBytes(16).toString("hex");

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo",
    state,
    allow_signup: "false",
  });

  // Persist state in an httpOnly cookie so the callback can verify it.
  res.setHeader("Set-Cookie", [
    `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
  ]);
  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
  });
  res.end();
}
