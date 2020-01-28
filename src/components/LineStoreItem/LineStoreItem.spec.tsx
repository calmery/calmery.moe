import * as React from "react";
import * as ReactDOM from "react-dom";
import { LineStoreItem } from "./LineStoreItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LineStoreItem id={1} thumbnailImageUrl="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
