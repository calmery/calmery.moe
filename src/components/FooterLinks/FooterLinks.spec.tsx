import * as React from "react";
import * as ReactDOM from "react-dom";
import { FooterLinks } from "./FooterLinks";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterLinks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
