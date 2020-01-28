import * as React from "react";
import { Card } from "~/components/Card";
import styles from "./LineStoreItem.scss";

export const LineStoreItem: React.FC<{
  thumbnailImageUrl: string;
  id: number;
}> = ({ id, thumbnailImageUrl }) => {
  return (
    <a
      href={`https://store.line.me/stickershop/product/${id}/ja`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        className={styles.container}
        thumbnail={[
          {
            url: thumbnailImageUrl
          }
        ]}
      />
    </a>
  );
};
