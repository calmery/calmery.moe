import * as React from "react";
import * as ReactDOM from "react-dom";
import { HorizontalScrollView } from "./HorizontalScrollView";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HorizontalScrollView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
