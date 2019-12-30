import * as React from "react";
import { useState } from "react";
import {
  sendToGoogleAnalytics,
  GOOGLE_ANALYTICS,
  GOOGLE_ANALYTICS_ACTION
} from "~/helpers/google-analytics";

const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          sendToGoogleAnalytics(
            GOOGLE_ANALYTICS.COUNTER,
            GOOGLE_ANALYTICS_ACTION.COUNTER_INCREMENT
          );
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          sendToGoogleAnalytics(
            GOOGLE_ANALYTICS.COUNTER,
            GOOGLE_ANALYTICS_ACTION.COUNTER_DECREMENT
          );
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </>
  );
};

export default Counter;
