import * as React from "react";
import styles from "./Top.scss";
import { Counter } from "~/containers/Counter";
import { Header } from "~/components/Header";

export const Top: React.FC = () => (
  <div className={styles.container}>
    <Header />
    <Counter />
  </div>
);
