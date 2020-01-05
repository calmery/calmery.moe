import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import styles from "./Fanbox.scss";

export const Fanbox: React.FC = () => (
  <React.Fragment>
    <Logo service={LogoService.FANBOX} />
    <HorizontalScrollView className={styles.container}>
      {["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"].map((text, index) => (
        <Card className={styles.fanbox} key={index} thumbnail="images/ogp.jpg">
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
  </React.Fragment>
);
