import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://35c3c6bfa928420a80d0c15d8a7a1a34@o325460.ingest.sentry.io/1868485",
  });
}
