import * as React from "react";
import classNames from "classnames";
import { useIntersectionObserver } from "~/helpers/use-intersection-observer";
import styles from "./HorizontalScrollViewItem.scss";

export const HorizontalScrollViewItem: React.FC<{
  className?: string;
  rootElement?: Element;
}> = ({ className, children, rootElement }) => {
  const [ref, opacity] = useIntersectionObserver(rootElement) as [
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
