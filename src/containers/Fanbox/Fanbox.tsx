import * as React from "react";
import { useEffect, useState } from "react";
import { FanboxItem } from "~/components/FanboxItem";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getFanboxItemData, FanboxItemData } from "~/helpers/api";
import styles from "./Fanbox.scss";

export const Fanbox: React.FC = () => {
  const [data, setData] = useState<FanboxItemData[]>([]);
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getFanboxItemData();

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
      <Logo service={LogoService.FANBOX} />
      <HorizontalScrollView
        rootElement={(element) => setRootElement(element)}
        className={styles.container}
      >
        {rootElement &&
          data.map((props, index) => (
            <HorizontalScrollViewItem
              className={styles.item}
              key={index}
              rootElement={rootElement}
            >
              <FanboxItem {...props} />
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
