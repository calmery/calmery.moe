import * as React from "react";
import { Counter } from "~/containers/Counter";
import { Header } from "~/components/Header";

export const Top: React.FC = () => (
  <React.Fragment>
    <Header />
    <Counter />
  </React.Fragment>
);
