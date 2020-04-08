import ReactGA from "react-ga";

ReactGA.initialize("UA-163144493-1", {
  debug: process.env.NODE_ENV !== "production",
});

export enum GOOGLE_ANALYTICS {
  DUMMY = "DUMMY",
}

export enum GOOGLE_ANALYTICS_ACTION {
  DUMMY = "Action: DUMMY",
}

// TODO: リンクのクリックなどの情報は収集したい
export const sendToGoogleAnalytics = (
  category: GOOGLE_ANALYTICS,
  action: GOOGLE_ANALYTICS_ACTION,
  label?: string
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
