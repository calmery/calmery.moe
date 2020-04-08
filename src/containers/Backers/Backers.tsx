import * as React from "react";
import { useEffect, useState } from "react";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { HorizontalScrollViewItem } from "~/containers/HorizontalScrollViewItem";
import { Logo, LogoService } from "~/components/Logo";
import { getBackerItemData, BackerItemData } from "~/helpers/api";
import { Backer } from "~/components/Backer";
import styles from "./Backers.scss";

export const Backers = () => {
  const [data, setData] = useState<BackerItemData[]>([]);
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getBackerItemData();

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
      <Logo service={LogoService.BACKERS} />
      <HorizontalScrollView
        rootElement={element => setRootElement(element)}
        className={styles.container}
      >
        {rootElement && (
          <>
            {data.map((props, index) => (
              <HorizontalScrollViewItem
                className={styles.item}
                key={index}
                rootElement={rootElement}
              >
                <Backer {...props} />
              </HorizontalScrollViewItem>
            ))}
            <HorizontalScrollViewItem
              className={styles.item}
              key={data.length}
              rootElement={rootElement}
            >
              <a
                href="https://www.pixiv.net/fanbox/creator/19590898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles["become-a-backer"]}>
                  <img src="/images/plus.svg" />
                </div>
              </a>
            </HorizontalScrollViewItem>
          </>
        )}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
