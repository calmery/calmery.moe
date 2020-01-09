import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import styles from "./Booth.scss";
import data from "~/data/booth.json";

export const Booth: React.FC = () => (
  <React.Fragment>
    <Logo service={LogoService.BOOTH} />
    <HorizontalScrollView className={styles.container}>
      {data.map(({ id }, index) => (
        <a
          href={`https://calmery.booth.pm/items/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <Card className={styles.booth} thumbnail={`images/booth/${id}.png`} />
        </a>
      ))}
    </HorizontalScrollView>
  </React.Fragment>
);
