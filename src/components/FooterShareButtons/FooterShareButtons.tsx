import * as React from "react";
import styles from "./FooterShareButtons.scss";

export const FooterShareButtons: React.FC = () => (
  <div className={styles.container}>
    <a
      href="http://twitter.com/share?url=https%3A%2F%2Fcalmery.moe&text=Calmery.moe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="images/share-buttons/twitter.svg" alt="Twitter" />
    </a>
    <a
      href="http://line.me/R/msg/text/?Calmery.moe%20https%3A%2F%2Fcalmery.moe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="images/share-buttons/line.svg" alt="LINE" />
    </a>
    <a
      href="https://github.com/calmery/calmery.moe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="images/share-buttons/github.svg" alt="GitHub" />
    </a>
  </div>
);
