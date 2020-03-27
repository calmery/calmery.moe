import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelatedServices } from "./RelatedServices";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RelatedServices />, div);
  ReactDOM.unmountComponentAtNode(div);
});
