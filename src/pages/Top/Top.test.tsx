import * as React from "react";
import * as ReactDOM from "react-dom";
import Top from "./Top";
import { store } from "../../modules";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Top />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
