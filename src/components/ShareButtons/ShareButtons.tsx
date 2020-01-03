import * as React from "react";
import styles from "./ShareButtons.scss";

export const ShareButtons: React.FC = () => (
  <div className={styles.container}>
    <img src="images/share-buttons/twitter.svg" />
    <img src="images/share-buttons/line.svg" />
    <img src="images/share-buttons/github.svg" />
  </div>
);
