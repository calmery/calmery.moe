import * as React from "react";
import classNames from "classnames";
import styles from "./HorizontalScrollView.scss";

type HorizontalScrollViewProps = {
  children: React.ReactNode;
  className?: string;
};

export const HorizontalScrollView: React.FC<HorizontalScrollViewProps> = ({
  children,
  className
}) => (
  <div className={styles.container}>
    <div className={classNames(styles.horizontal, className)}>{children}</div>
  </div>
);
