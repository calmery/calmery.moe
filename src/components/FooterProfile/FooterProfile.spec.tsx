import * as React from "react";
import * as ReactDOM from "react-dom";
import { FooterProfile } from "./FooterProfile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
