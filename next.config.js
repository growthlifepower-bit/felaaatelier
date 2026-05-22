function getOrigin(value) {
  if (!value || value.includes("placeholder") || value.includes("example.com")) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

const analyticsOrigin = getOrigin(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT);
const connectSrc = ["'self'"];
if (analyticsOrigin) {
  connectSrc.push(analyticsOrigin);
}

const scriptSrc = ["'self'", "'unsafe-inline'"];
if (process.env.NODE_ENV !== "production") {
  scriptSrc.push("'unsafe-eval'");
}

/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "img-src 'self' data: blob:; " +
      "style-src 'self' 'unsafe-inline'; " +
      `script-src ${scriptSrc.join(" ")}; ` +
      "font-src 'self' data:; " +
      `connect-src ${connectSrc.join(" ")}; ` +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  output: "standalone",
  distDir: process.env.NEXT_DIST_DIR || ".next",
  webpack: (config) => {
    config.resolve.alias["@"] = require("path").resolve(__dirname, "src");
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  try {
    const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
    initOpenNextCloudflareForDev();
  } catch {
    // Ignore during early local setup if deps are not installed yet.
  }
}

module.exports = nextConfig;
