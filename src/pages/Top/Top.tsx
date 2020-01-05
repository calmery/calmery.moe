import * as React from "react";
import { useState } from "react";
import { Biography } from "~/components/Biography";
import { Card } from "~/components/Card";
import { Caption } from "~/components/Caption";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
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
        <HorizontalScrollView className={styles.stickers}>
          {["images/stickers/2.jpg", "images/stickers/1.jpg"].map(
            (url, index) => (
              <Card className={styles.sticker} key={index} thumbnail={url} />
            )
          )}
        </HorizontalScrollView>
        <Logo service={LogoService.FANBOX} />
        <HorizontalScrollView className={styles.articles}>
          {["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"].map((text, index) => (
            <Card
              className={styles.article}
              key={index}
              thumbnail="images/ogp.jpg"
            >
              <div className={styles.title}>かるめりちゃんスタンプ</div>
              <div className={styles.description}>
                イラストはめたねのおくすりさん！めっちゃかわいいイラストが 16
                個入...
              </div>
              <div className={styles.tags}>
                <div className={styles.tag}>
                  <img src="images/tag.svg" alt="タグ" />
                  イラスト
                </div>
                <div className={styles.tag}>
                  <img src="images/tag.svg" alt="タグ" />
                  イラスト
                </div>
              </div>
            </Card>
          ))}
        </HorizontalScrollView>
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
