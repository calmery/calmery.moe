import * as React from "react";
import styles from "./Top.scss";
import { Counter } from "~/containers/Counter";

export const Top: React.FC = () => (
  <div className={styles.container}>
    <Counter />
  </div>
);
