import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { BoothItem } from "~/components/BoothItem";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getBoothItemData, BoothItemData } from "~/helpers/api";
import styles from "./Booth.scss";

export const Booth: React.FC = () => {
  const [data, setData] = useState<BoothItemData[]>([]);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <React.Fragment>
      <Logo service={LogoService.BOOTH} />
      <HorizontalScrollView rootRef={ref} className={styles.container}>
        {ref.current &&
          data.map(({ id, thumbnailImageUrl }, index) => (
            <HorizontalScrollViewItem
              key={index}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              rootRefCurrent={ref.current!}
              className={styles.item}
            >
              <BoothItem id={id} thumbnailImageUrl={thumbnailImageUrl[0]} />
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
