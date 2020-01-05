import * as React from "react";
import * as ReactDOM from "react-dom";
import { Caption } from "./Caption";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Caption />, div);
  ReactDOM.unmountComponentAtNode(div);
});
