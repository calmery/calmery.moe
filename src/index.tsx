import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { store, history } from "./modules";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import Top from "./pages/Top";

serviceWorker.register();

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
