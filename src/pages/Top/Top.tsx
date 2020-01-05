import * as React from "react";
import { useState } from "react";
import { Biography } from "~/components/Biography";
import { Card } from "~/components/Card";
import { Caption } from "~/components/Caption";
import { Fanbox } from "~/components/Fanbox";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import { LineStickers } from "~/components/LineStickers";
import styles from "./Top.scss";

export const Top: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <div className={styles.menu} onClick={() => setShow(!show)}>
        <img src="images/menu.svg" alt="メニュー" />
      </div>
      {show && (
        <div className={styles.appContainer}>
          <div className={styles.title}>アプリ</div>
          <div className={styles.apps}>
            <div className={styles.app}>
              <img src="images/apps/calmery-chan-camera.jpg" alt="かるカメ" />
              <div className={styles.name}>かるカメ</div>
            </div>
            <div className={styles.app}>
              <img src="images/apps/calmery-chan-camera.jpg" alt="かるカメ" />
              <div className={styles.name}>かるカメ</div>
            </div>
            <div className={styles.app}>
              <img src="images/apps/calmery-chan-camera.jpg" alt="かるカメ" />
              <div className={styles.name}>かるカメ</div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <Caption />
        <Biography />
        <LineStickers />
        <Fanbox />
        <Logo service={LogoService.BOOTH} />
        <HorizontalScrollView className={styles.booth}>
          {[
            "images/booth/1.jpg",
            "images/booth/2.jpg",
            "images/booth/3.jpg",
            "images/booth/4.jpg",
            "images/booth/5.jpg"
          ].map((url, index) => (
            <Card className={styles.item} key={index} thumbnail={url} />
          ))}
        </HorizontalScrollView>
        <Footer />
      </div>
    </React.Fragment>
  );
};
