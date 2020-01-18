import * as React from "react";
import * as ReactDOM from "react-dom";
import "~/helpers/google-analytics";
import "~/helpers/sentry";
import "~/index.scss";
import { Top } from "~/pages/Top";

ReactDOM.render(<Top />, document.getElementById("root"));
