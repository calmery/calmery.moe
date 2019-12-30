import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/browser";
import { store } from "./modules";
import "./index.scss";
import Top from "./pages/Top";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://35c3c6bfa928420a80d0c15d8a7a1a34@sentry.io/1868485"
  });
}

ReactGA.initialize("UA-153119606-2", {
  debug: process.env.NODE_ENV !== "production"
});

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById("root")
);
