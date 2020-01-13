import * as React from "react";
import { useEffect, useState } from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { getLine } from "~/helpers/api";
import styles from "./LineStickers.scss";

export const LineStickers: React.FC = () => {
  const [data, setData] = useState<
    | {
        id: number;
        name: string;
        thumbnailImageUrl: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getLine();
      setData(data);
    };

    getData();
  }, []);

  if (data === null || data.length === 0) {
    return null;
  }

  return (
    <HorizontalScrollView className={styles.container}>
      {data.map(({ id, thumbnailImageUrl }, index) => (
        <a
          key={index}
          href={`https://store.line.me/stickershop/product/${id}/ja`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className={styles.sticker} thumbnail={thumbnailImageUrl} />
        </a>
      ))}
    </HorizontalScrollView>
  );
};
