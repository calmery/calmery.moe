import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getBooth, BoothItem } from "~/helpers/api";
import styles from "./Booth.scss";

export const Booth: React.FC = () => {
  const [data, setData] = useState<BoothItem[] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getBooth();

      if (!unmounted) {
        setData(data);
      }
    };

    getData();

    return () => {
      unmounted = true;
    };
  }, []);

  const rootRefCurrent = ref.current;

  return (
    <React.Fragment>
      <Logo service={LogoService.BOOTH} />
      <HorizontalScrollView rootRef={ref} className={styles.container}>
        {/* TODO: 表示領域前後でフェードイン、フェードアウトさせるために必要、もう少し良い方法を考えたい */}
        {rootRefCurrent &&
          data &&
          data.map(({ id, thumbnailImageUrl }, index) => (
            <HorizontalScrollViewItem
              key={index}
              rootRefCurrent={rootRefCurrent}
              className={styles.item}
            >
              <a
                href={`https://calmery.booth.pm/items/${id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className={styles.booth}
                  thumbnail={[
                    {
                      url: thumbnailImageUrl[0]
                    }
                  ]}
                />
              </a>
            </HorizontalScrollViewItem>
          ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
