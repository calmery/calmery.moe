import * as React from "react";
import classNames from "classnames";
import styles from "./HorizontalScrollView.scss";

export const HorizontalScrollView: React.FC<{
  className?: string;
  rootRef?: React.RefObject<HTMLDivElement>;
}> = ({ children, className, rootRef }) => (
  <div className={styles.container} ref={rootRef}>
    <div className={classNames(styles.horizontal, className)}>{children}</div>
  </div>
);
