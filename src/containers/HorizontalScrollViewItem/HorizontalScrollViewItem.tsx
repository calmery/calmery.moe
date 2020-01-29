import * as React from "react";
import { useIntersectionObserver } from "~/helpers/use-intersection-observer";

export const HorizontalScrollViewItem: React.FC<{
  className?: string;
  rootElement?: Element;
}> = ({ className, children, rootElement }) => {
  const [ref, opacity] = useIntersectionObserver(rootElement) as [
    React.RefObject<HTMLDivElement>,
    number
  ];

  return (
    <div ref={ref} className={className} style={{ opacity }}>
      {children}
    </div>
  );
};
