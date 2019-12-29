export function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    if (window.location.hostname === "localhost") {
      return;
    }

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(error => {
        // eslint-disable-next-line no-console
        console.error("Error during service worker registration:", error);
      });
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
