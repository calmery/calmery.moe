import * as React from "react";
import styles from "./FooterComment.scss";

export const FooterComment: React.FC = () => (
  <div className={styles.container}>
    Made with <img src="images/heart.svg" alt="ハート" /> by Calmery
    <br />
    <a href="https://www.freepik.com/free-photos-vectors/background">
      Background vector created by freepik - freepik.com
    </a>
  </div>
);
