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
    <Logo service={LogoService.BOOTH} />
    <HorizontalScrollView className={styles.articles}>
      {["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"].map((text, index) => (
        <Card className={styles.article} key={index} thumbnail="images/ogp.jpg">
          {text}
        </Card>
      ))}
    </HorizontalScrollView>
    <Logo service={LogoService.FANBOX} />
    <HorizontalScrollView className={styles.articles}>
      {["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"].map((text, index) => (
        <Card className={styles.article} key={index} thumbnail="images/ogp.jpg">
          {text}
        </Card>
      ))}
    </HorizontalScrollView>
    <Footer />
  </React.Fragment>
);
