import * as React from "react";
import * as ReactDOM from "react-dom";
import { Backers } from "./Backers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Backers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
