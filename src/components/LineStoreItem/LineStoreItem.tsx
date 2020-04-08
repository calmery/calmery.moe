import * as React from "react";
import { Card } from "~/components/Card";
import { LineStoreItemData } from "~/helpers/api";
import styles from "./LineStoreItem.scss";

export const LineStoreItem: React.FC<LineStoreItemData> = ({
  id,
  thumbnailImageUrl,
}) => {
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
            url: thumbnailImageUrl,
          },
        ]}
      />
    </a>
  );
};
