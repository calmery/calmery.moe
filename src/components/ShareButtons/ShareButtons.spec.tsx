import * as React from "react";
import * as ReactDOM from "react-dom";
import { ShareButtons } from "./ShareButtons";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ShareButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
