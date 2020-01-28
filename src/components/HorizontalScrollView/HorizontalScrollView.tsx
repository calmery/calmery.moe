import * as React from "react";
import classNames from "classnames";
import styles from "./HorizontalScrollView.scss";

export const HorizontalScrollView: React.FC<{
  className?: string;
  rootElement?: (instance: HTMLDivElement | null) => void;
}> = ({ children, className, rootElement }) => (
  <div className={styles.container} ref={rootElement}>
    <div className={classNames(styles.horizontal, className)}>{children}</div>
  </div>
);
