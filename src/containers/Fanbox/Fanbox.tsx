import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { FanboxItem } from "~/components/FanboxItem";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getFanboxItemData, FanboxItemData } from "~/helpers/api";
import styles from "./Fanbox.scss";

export const Fanbox: React.FC = () => {
  const [data, setData] = useState<FanboxItemData[]>([]);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <React.Fragment>
      <Logo service={LogoService.FANBOX} />
      <HorizontalScrollView rootRef={ref} className={styles.container}>
        {ref.current &&
          data.map(
            (
              { id, title, excerpt, coverImageUrl, tags }: FanboxItemData,
              index
            ) => (
              <HorizontalScrollViewItem
                className={styles.item}
                key={index}
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                rootRefCurrent={ref.current!}
              >
                <FanboxItem
                  id={id}
                  title={title}
                  excerpt={excerpt}
                  coverImageUrl={coverImageUrl}
                  tags={tags}
                />
              </HorizontalScrollViewItem>
            )
          )}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
