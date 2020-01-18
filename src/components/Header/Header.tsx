import * as React from "react";
import { useEffect, useRef } from "react";
import ParallaxJS from "parallax-js";
import styles from "./Header.scss";

// Helpers

const Parallax: React.FC<{
  depth: string;
}> = ({ children, depth }) => (
  <div className={styles.parallax} data-depth={depth}>
    {children}
  </div>
);

// Parts

const Border: React.FC = () => (
  <img src="images/header/border.svg" className={styles.border} alt="雲" />
);

const Character: React.FC = () => (
  <Parallax depth="0.05">
    <picture className={styles.character}>
      <source srcSet="images/header/character.png.webp" type="image/webp" />
      <img src="images/header/character.png" alt="キャラクター" />
    </picture>
  </Parallax>
);

const Cloud: React.FC<{
  id: string;
  depth: string;
}> = ({ id, depth }) => (
  <Parallax depth={depth}>
    <img
      src={`images/header/clouds/${id}.svg`}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={(styles as any)[`cloud-${id}`]}
      alt="雲"
    />
  </Parallax>
);

const Logo: React.FC = () => (
  <Parallax depth="0.1">
    <picture className={styles.logo}>
      <source srcSet="images/header/logo.png.webp" type="image/webp" />
      <img src="images/header/logo.png" alt="ロゴ" />
    </picture>
  </Parallax>
);

const Rainbow: React.FC = () => (
  <Parallax depth="0.05">
    <img src="images/header/rainbow.svg" className={styles.rainbow} alt="虹" />
  </Parallax>
);

// Main

export const Header: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    new ParallaxJS(ref.current);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles["parallax-js"]}>
        <Rainbow />
        <Cloud id="13" depth="0.1" />
        <Cloud id="12" depth="0.15" />
        <Cloud id="11" depth="0.1" />
        <Cloud id="10" depth="0.15" />
        <Cloud id="9" depth="0.1" />
        <Cloud id="8" depth="0.1" />
        <Cloud id="7" depth="0.3" />
        <Cloud id="6" depth="0.15" />
        <Cloud id="5" depth="0.3" />
        <Cloud id="4" depth="0.1" />
        <Cloud id="3" depth="0.15" />
        <Cloud id="2" depth="0.1" />
        <Cloud id="1" depth="0.3" />
        <Logo />
        <Character />
      </div>

      <Border />
    </div>
  );
};
