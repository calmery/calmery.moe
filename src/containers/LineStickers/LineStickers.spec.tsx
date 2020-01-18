import * as React from "react";
import * as ReactDOM from "react-dom";
import { LineStickers } from "./LineStickers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LineStickers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
