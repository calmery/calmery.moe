import * as React from "react";
import classNames from "classnames";
import styles from "./HorizontalScrollView.scss";

export const HorizontalScrollView: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <div className={styles.container}>
    <div className={classNames(styles.horizontal, className)}>{children}</div>
  </div>
);
