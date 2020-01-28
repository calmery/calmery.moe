import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { LineStoreItem } from "~/components/LineStoreItem";
import { Logo, LogoService } from "~/components/Logo";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { getLineStoreItemData, LineStoreItemData } from "~/helpers/api";
import styles from "./LineStore.scss";

export const LineStore: React.FC = () => {
  const [data, setData] = useState<LineStoreItemData[]>([]);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <React.Fragment>
      <Logo service={LogoService.LINE_STORE} />
      <HorizontalScrollView rootRef={ref} className={styles.container}>
        {ref.current &&
          data.map(({ id, thumbnailImageUrl }, index) => (
            <HorizontalScrollViewItem
              className={styles.item}
              key={index}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              rootRefCurrent={ref.current!}
            >
              <LineStoreItem id={id} thumbnailImageUrl={thumbnailImageUrl} />
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
