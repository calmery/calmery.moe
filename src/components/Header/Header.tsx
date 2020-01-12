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
          <img src="images/header/rainbow.svg" className={styles.rainbow} />
        </div>

        <div className={styles.parallax} data-depth="0.05">
          <img src="images/header/clouds/14.svg" className={styles.c14} />
        </div>

        <div className={styles.parallax} data-depth="0.1">
          {/* Fixed */}
          <img src="images/header/clouds/13.svg" className={styles.c13} />
        </div>

        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/12.svg" className={styles.c12} />
        </div>

        <div className={styles.parallax} data-depth="0.3">
          <img src="images/header/clouds/11.svg" className={styles.c11} />
        </div>

        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/10.svg" className={styles.c10} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/9.svg" className={styles.c9} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/8.svg" className={styles.c8} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/7.svg" className={styles.c7} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/6.svg" className={styles.c6} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/5.svg" className={styles.c5} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/4.svg" className={styles.c4} />
        </div>
        <div className={styles.parallax} data-depth="0.1">
          <img src="images/header/clouds/3.svg" className={styles.c3} />
        </div>
        <div className={styles.parallax} data-depth="0.6">
          <img src="images/header/clouds/2.svg" className={styles.c2} />
        </div>
      </div>

      <div className={styles.fixed}>
        <picture className={styles.character}>
          <source src="images/header/character.webp" type="image/webp" />
          <img src="images/header/character.png" />
        </picture>
        <img src="images/header/clouds/1.svg" className={styles.c1} />
        <img src="images/header/logo.png" className={styles.logo} />
        <picture className={styles.logo}>
          <source src="images/header/logo.webp" type="image/webp" />
          <img src="images/header/logo.png" />
        </picture>
      </div>
    </div>
  );
};

export const Header: React.FC = () => <HeaderPC />;
