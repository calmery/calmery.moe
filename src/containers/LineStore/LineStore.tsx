import * as React from "react";
import { useEffect, useState } from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import { getLine, LineStickerItem } from "~/helpers/api";
import styles from "./LineStore.scss";

export const LineStore: React.FC = () => {
  const [data, setData] = useState<LineStickerItem[] | null>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getLine();

      if (!unmounted) {
        setData(data);
      }
    };

    getData();

    return () => {
      unmounted = true;
    };
  }, []);

  if (data === null || data.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Logo service={LogoService.LINE_STORE} />
      <HorizontalScrollView className={styles.container}>
        {data.map(({ id, thumbnailImageUrl }, index) => (
          <a
            key={index}
            href={`https://store.line.me/stickershop/product/${id}/ja`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              className={styles.sticker}
              thumbnail={[
                {
                  url: thumbnailImageUrl
                }
              ]}
            />
          </a>
        ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
