import * as React from "react";
import * as ReactDOM from "react-dom";
import { BoothItem } from "./BoothItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BoothItem id={1} thumbnailImageUrl="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
