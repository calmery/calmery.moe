import * as React from "react";
import styles from "./FooterShareButtons.scss";

export const FooterShareButtons: React.FC = () => (
  <div className={styles.container}>
    <img src="images/share-buttons/twitter.svg" alt="Twitter" />
    <img src="images/share-buttons/line.svg" alt="LINE" />
    <img src="images/share-buttons/github.svg" alt="GitHub" />
  </div>
);
