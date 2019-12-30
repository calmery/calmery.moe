import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import counter, { CounterState } from "./counter/reducer";

export interface State {
  counter: CounterState;
}

export const store = createStore(
  combineReducers({ counter }),
  applyMiddleware(...(process.env.NODE_ENV === "production" ? [] : [logger]))
);
