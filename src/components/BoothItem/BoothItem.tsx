import * as React from "react";
import { Card } from "~/components/Card";
import { BoothItemData } from "~/helpers/api";
import styles from "./BoothItem.scss";

export const BoothItem: React.FC<BoothItemData> = ({
  id,
  thumbnailImageUrls,
}) => (
  <a
    href={`https://calmery.booth.pm/items/${id}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card
      className={styles.container}
      thumbnail={[
        {
          url: thumbnailImageUrls[0],
        },
      ]}
    />
  </a>
);
