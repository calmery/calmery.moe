import ReactGA from "react-ga";

export enum GOOGLE_ANALYTICS {
  COUNTER = "COUNTER"
}

export enum GOOGLE_ANALYTICS_ACTION {
  COUNTER_INCREMENT = "Action: COUNTER/INCREMENT",
  COUNTER_DECREMENT = "Action: COUNTER/DECREMENT"
}

export const sendToGoogleAnalytics = (
  category: GOOGLE_ANALYTICS,
  action: GOOGLE_ANALYTICS_ACTION,
  label?: string
) => {
  ReactGA.event({
    category,
    action,
    label
  });
};
