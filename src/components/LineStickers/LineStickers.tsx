import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import styles from "./LineStickers.scss";

export const LineStickers: React.FC = () => (
  <HorizontalScrollView className={styles.stickers}>
    {["images/stickers/2.jpg", "images/stickers/1.jpg"].map((url, index) => (
      <Card className={styles.sticker} key={index} thumbnail={url} />
    ))}
  </HorizontalScrollView>
);
