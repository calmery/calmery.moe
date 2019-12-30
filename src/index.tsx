import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import * as Sentry from "@sentry/browser";
import { store, history } from "./modules";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import Top from "./pages/Top";

serviceWorker.register();

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://35c3c6bfa928420a80d0c15d8a7a1a34@sentry.io/1868485"
  });
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Top} />
    <Redirect to="/" />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
