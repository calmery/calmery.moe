import * as React from "react";
import classNames from "classnames";
import styles from "./Card.scss";

export enum CardDirection {
  COLUMN,
  ROW
}

type CardProps = {
  className?: string;
  direction?: CardDirection;
  thumbnail?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  direction = CardDirection.COLUMN,
  thumbnail
}) => (
  <div
    className={classNames(
      styles.container,
      {
        [styles.column]: direction === CardDirection.COLUMN,
        [styles.row]: direction === CardDirection.ROW
      },
      className
    )}
  >
    {thumbnail && <img src={thumbnail} className={styles.thumbnail} />}
    <div className={styles.contents}>{children}</div>
  </div>
);
