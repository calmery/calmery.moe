import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelatedServicesItem } from "./RelatedServicesItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RelatedServicesItem logoUrl="" url="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
