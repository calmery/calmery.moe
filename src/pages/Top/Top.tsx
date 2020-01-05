import * as React from "react";
import { Card, CardDirection } from "~/components/Card";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import styles from "./Top.scss";

export const Top: React.FC = () => (
  <React.Fragment>
    <Header />
    <div className={styles.container}>
      <div className={styles.caption}>
        かわいいものが好き！
        <br />
        うちの子、かるめりちゃんのファンサイトです。
      </div>
      <Card
        direction={CardDirection.ROW}
        className={styles.biography}
        thumbnail="images/ogp.jpg"
      >
        <div className={styles.title}>かるめりちゃんとは？</div>
        <div className={styles.text}>
          かるめりちゃんは明るく好奇心旺盛な女の子で名前は愛々璃（あめり）ちゃん！誕生日は
          3/27 だよ！
        </div>
      </Card>
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
