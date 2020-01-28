import * as React from "react";
import { Card } from "~/components/Card";
import styles from "./BoothItem.scss";

export const BoothItem: React.FC<{
  id: number;
  thumbnailImageUrl: string;
}> = ({ id, thumbnailImageUrl }) => (
  <a
    href={`https://calmery.booth.pm/items/${id}`}
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
