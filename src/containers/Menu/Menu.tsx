import * as React from "react";
import { useState } from "react";
import styles from "./Menu.scss";

export const Menu: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.button} onClick={() => setShow(!show)}>
        <img src="images/menu.svg" alt="メニュー" />
      </div>
      {show && (
        <div className={styles.container}>
          <div className={styles.title}>アプリ</div>
          <div className={styles.apps}>
            <a href="https://camera.calmery.moe">
              <div className={styles.app}>
                <img src="images/apps/calmery-chan-camera.jpg" alt="かるカメ" />
                <div className={styles.name}>かるカメ</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
