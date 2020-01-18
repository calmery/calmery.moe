import * as React from "react";
import { useState } from "react";
import ParallaxJS from "parallax-js";
import styles from "./Menu.scss";

const handleOnClickRequestPermission = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const permission = await (DeviceMotionEvent as any).requestPermission();

  if (permission === "granted") {
    new ParallaxJS(document.getElementById("parallax"));
  }
};

export const Menu: React.FC = () => {
  const [show, setShow] = useState(false);
  const showRequestPermissionButton =
    window.DeviceMotionEvent &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (DeviceMotionEvent as any).requestPermission === "function";

  return (
    <React.Fragment>
      <nav className={styles.buttons}>
        {showRequestPermissionButton && (
          <div
            className={styles.button}
            onClick={() => handleOnClickRequestPermission()}
          >
            <img
              src="images/device-motion-event.svg"
              alt="メニュー"
              className={styles["device-motion-event"]}
            />
          </div>
        )}
        <div className={styles.button} onClick={() => setShow(!show)}>
          <img src="images/menu.svg" alt="メニュー" />
        </div>
      </nav>
      {show && (
        <div className={styles.container}>
          <div className={styles.title}>アプリ</div>
          <div className={styles.apps}>
            <a href="https://camera.calmery.moe">
              <div className={styles.app}>
                <img src="images/menu/calmery-chan-camera.jpg" alt="かるカメ" />
                <div className={styles.name}>かるカメ</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
