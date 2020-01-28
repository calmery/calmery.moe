import * as React from "react";
import { useEffect, useState } from "react";
import { BoothItem } from "~/components/BoothItem";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getBoothItemData, BoothItemData } from "~/helpers/api";
import styles from "./Booth.scss";

export const Booth: React.FC = () => {
  const [data, setData] = useState<BoothItemData[]>([]);
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getBoothItemData();

      if (!unmounted) {
        setData(data);
      }
    };

    getData();

    return () => {
      unmounted = true;
    };
  }, []);

  if (!data.length) {
    return null;
  }

  return (
    <React.Fragment>
      <Logo service={LogoService.BOOTH} />
      <HorizontalScrollView
        rootElement={element => setRootElement(element)}
        className={styles.container}
      >
        {rootElement &&
          data.map(({ id, thumbnailImageUrl }, index) => (
            <HorizontalScrollViewItem
              className={styles.item}
              key={index}
              rootElement={rootElement}
            >
              <BoothItem id={id} thumbnailImageUrl={thumbnailImageUrl[0]} />
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
