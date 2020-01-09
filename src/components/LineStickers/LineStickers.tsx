import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import styles from "./LineStickers.scss";

export const LineStickers: React.FC = () => (
  <HorizontalScrollView className={styles.container}>
    <a href="https://store.line.me/stickershop/product/9903456/ja">
      <Card className={styles.sticker} thumbnail="images/stickers/2.jpg" />
    </a>
    <a href="https://store.line.me/stickershop/product/6457012/ja">
      <Card className={styles.sticker} thumbnail="images/stickers/1.jpg" />
    </a>
  </HorizontalScrollView>
);
