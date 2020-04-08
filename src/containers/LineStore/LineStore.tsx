import * as React from "react";
import { useEffect, useState } from "react";
import { LineStoreItem } from "~/components/LineStoreItem";
import { Logo, LogoService } from "~/components/Logo";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { getLineStoreItemData, LineStoreItemData } from "~/helpers/api";
import styles from "./LineStore.scss";

export const LineStore: React.FC = () => {
  const [data, setData] = useState<LineStoreItemData[]>([]);
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getLineStoreItemData();

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
      <Logo service={LogoService.LINE_STORE} />
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
              <LineStoreItem {...props} />
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
