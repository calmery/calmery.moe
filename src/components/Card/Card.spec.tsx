import * as React from "react";
import * as ReactDOM from "react-dom";
import { Card } from "./Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
