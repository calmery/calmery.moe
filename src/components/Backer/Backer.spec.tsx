import * as React from "react";
import * as ReactDOM from "react-dom";
import { Backer } from "./Backer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Backer iconUrl="" plan={100} url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
