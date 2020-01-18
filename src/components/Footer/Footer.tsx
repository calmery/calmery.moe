import * as React from "react";
import { FooterComment } from "~/components/FooterComment";
import { FooterProfile } from "~/components/FooterProfile";
import { FooterShareButtons } from "~/components/FooterShareButtons";
import styles from "./Footer.scss";

export const Footer: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <FooterProfile />
    </div>
    <div className={styles.row}>
      <FooterShareButtons />
      <FooterComment />
    </div>
  </div>
);
