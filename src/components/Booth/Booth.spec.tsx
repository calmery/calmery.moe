import * as React from "react";
import * as ReactDOM from "react-dom";
import { Booth } from "./Booth";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Booth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
