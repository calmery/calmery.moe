import * as React from "react";
import * as ReactDOM from "react-dom";
import { FanboxItem } from "./FanboxItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FanboxItem id="1" coverImageUrl="" title="" excerpt="" tags={[]} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
