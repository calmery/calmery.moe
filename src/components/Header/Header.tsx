import * as React from "react";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import styles from "./Header.scss";

export const HeaderPC: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    new Parallax(ref.current);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.parallaxs}>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/rainbow.svg"
            className={styles.rainbow}
            alt="虹"
          />
        </div>
        <div className={styles.parallax} data-depth="0.05">
          <img
            src="images/header/clouds/14.svg"
            className={styles.c14}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/13.svg"
            className={styles.c13}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/12.svg"
            className={styles.c12}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.3">
          <img
            src="images/header/clouds/11.svg"
            className={styles.c11}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/10.svg"
            className={styles.c10}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/9.svg"
            className={styles.c9}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/8.svg"
            className={styles.c8}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/7.svg"
            className={styles.c7}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/6.svg"
            className={styles.c6}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/5.svg"
            className={styles.c5}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/4.svg"
            className={styles.c4}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img
            src="images/header/clouds/3.svg"
            className={styles.c3}
            alt="雲"
          />
        </div>
        <div className={styles.parallax} data-depth="0.6">
          <img
            src="images/header/clouds/2.svg"
            className={styles.c2}
            alt="雲"
          />
        </div>
      </div>

      <div className={styles.fixed}>
        <picture className={styles.character}>
          <source srcSet="images/header/character.png.webp" type="image/webp" />
          <img src="images/header/character.png" alt="キャラクター" />
        </picture>
        <img src="images/header/clouds/1.svg" className={styles.c1} alt="雲" />
        <picture className={styles.logo}>
          <source srcSet="images/header/logo.png.webp" type="image/webp" />
          <img src="images/header/logo.png" alt="ロゴ" />
        </picture>
      </div>
    </div>
  );
};

export const Header: React.FC = () => <HeaderPC />;
