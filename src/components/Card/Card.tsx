import * as React from "react";
import classNames from "classnames";
import styles from "./Card.scss";

export enum CardDirection {
  COLUMN,
  ROW,
}

type CardProps = {
  className?: string;
  direction?: CardDirection;
  thumbnail?: {
    type?: "webp";
    url: string;
  }[];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card: React.FC<CardProps> = ({
  children,
  className,
  direction = CardDirection.COLUMN,
  thumbnail,
  style,
}) => (
  <div
    className={classNames(
      styles.container,
      {
        [styles.column]: direction === CardDirection.COLUMN,
        [styles.row]: direction === CardDirection.ROW,
      },
      className
    )}
    style={style}
  >
    {thumbnail && (
      <picture className={styles.thumbnail}>
        {thumbnail.map(({ type, url }, index) => {
          switch (type) {
            case "webp":
              return <source srcSet={url} type="image/webp" key={index} />;
            default:
              return <img src={url} alt="サムネイル" key={index} />;
          }
        })}
      </picture>
    )}
    {children && <div className={styles.contents}>{children}</div>}
  </div>
);
