import * as React from "react";
import * as ReactDOM from "react-dom";
import { HorizontalScrollViewItem } from "./HorizontalScrollViewItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HorizontalScrollViewItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
