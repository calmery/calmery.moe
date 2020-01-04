import * as React from "react";
import * as ReactDOM from "react-dom";
import { Logo, LogoService } from "./Logo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo service={LogoService.BOOTH} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
