import * as React from "react";
import * as ReactDOM from "react-dom";
import { LineStore } from "./LineStore";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LineStore />, div);
  ReactDOM.unmountComponentAtNode(div);
});
