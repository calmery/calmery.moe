import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./Counter";
import { store } from "../../modules";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
