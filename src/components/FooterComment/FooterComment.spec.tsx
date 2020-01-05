import * as React from "react";
import * as ReactDOM from "react-dom";
import { FooterComment } from "./FooterComment";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterComment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
