import {
  routerMiddleware,
  connectRouter,
  RouterState
} from "connected-react-router";
import { createBrowserHistory } from "history";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import counter, { CounterState } from "./counter/reducer";

export const history = createBrowserHistory({
  basename: document.baseURI.replace(window.location.origin, "")
});

export interface State {
  counter: CounterState;
  router: RouterState;
}

export const store = createStore(
  combineReducers({
    counter,
    router: connectRouter(history)
  }),
  applyMiddleware(
    ...(process.env.NODE_ENV === "production"
      ? [routerMiddleware(history)]
      : [routerMiddleware(history), logger])
  )
);
