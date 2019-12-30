import { INCREMENT, DECREMENT, Actions } from "./actions";
import {
  sendToGoogleAnalytics,
  GOOGLE_ANALYTICS,
  GOOGLE_ANALYTICS_ACTION
} from "../../helpers/google-analytics";

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      sendToGoogleAnalytics(
        GOOGLE_ANALYTICS.COUNTER,
        GOOGLE_ANALYTICS_ACTION.COUNTER_INCREMENT,
        action.payload.count.toString()
      );
      return { count: state.count + action.payload.count };
    case DECREMENT:
      sendToGoogleAnalytics(
        GOOGLE_ANALYTICS.COUNTER,
        GOOGLE_ANALYTICS_ACTION.COUNTER_DECREMENT
      );
      return { count: state.count - 1 };
    default:
      return state;
  }
};
