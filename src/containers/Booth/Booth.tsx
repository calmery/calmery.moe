import * as React from "react";
import { useEffect, useState } from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import { getBooth } from "~/helpers/api";
import styles from "./Booth.scss";

export const Booth: React.FC = () => {
  const [data, setData] = useState<
    | {
        id: number;
        name: string;
        thumbnailImageUrl: string[];
      }[]
    | null
  >(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getBooth();
      setData(data);
    };

    getData();
  }, []);

  if (data === null || data.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Logo service={LogoService.BOOTH} />
      <HorizontalScrollView className={styles.container}>
        {data.map(({ id, thumbnailImageUrl }, index) => (
          <a
            href={`https://calmery.booth.pm/items/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Card className={styles.booth} thumbnail={thumbnailImageUrl[0]} />
          </a>
        ))}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
