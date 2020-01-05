import * as React from "react";
import { useState } from "react";
import { Biography } from "~/components/Biography";
import { Booth } from "~/components/Booth";
import { Caption } from "~/components/Caption";
import { Fanbox } from "~/components/Fanbox";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
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
        <Booth />
        <Footer />
      </div>
    </React.Fragment>
  );
};
