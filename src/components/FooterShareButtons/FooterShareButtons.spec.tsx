import * as React from "react";
import * as ReactDOM from "react-dom";
import { FooterShareButtons } from "./FooterShareButtons";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterShareButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
