import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import styles from "./Booth.scss";

export const Booth: React.FC = () => (
  <React.Fragment>
    <Logo service={LogoService.BOOTH} />
    <HorizontalScrollView className={styles.container}>
      {[
        "images/booth/1.jpg",
        "images/booth/2.jpg",
        "images/booth/3.jpg",
        "images/booth/4.jpg",
        "images/booth/5.jpg"
      ].map((url, index) => (
        <Card className={styles.booth} key={index} thumbnail={url} />
      ))}
    </HorizontalScrollView>
  </React.Fragment>
);
