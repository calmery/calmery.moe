import * as React from "react";
import * as ReactDOM from "react-dom";
import { Biography } from "./Biography";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Biography />, div);
  ReactDOM.unmountComponentAtNode(div);
});
