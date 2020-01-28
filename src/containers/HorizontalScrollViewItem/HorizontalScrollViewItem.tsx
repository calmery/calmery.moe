import * as React from "react";
import classNames from "classnames";
import { useIntersectionObserver } from "~/helpers/use-intersection-observer";
import styles from "./HorizontalScrollViewItem.scss";

export const HorizontalScrollViewItem: React.FC<{
  className?: string;
  rootRefCurrent?: Element;
}> = ({ className, children, rootRefCurrent }) => {
  const [ref, opacity] = useIntersectionObserver(rootRefCurrent) as [
    React.RefObject<HTMLDivElement>,
    number
  ];

  return (
    <div
      ref={ref}
      className={classNames(styles.container, className)}
      style={{ opacity }}
    >
      {children}
    </div>
  );
};
