import * as React from "react";
import styles from "./FooterProfile.scss";

export const FooterProfile: React.FC = () => (
  <a href="https://calmery.me">
    <div className={styles.container}>
      <div className={styles.icon}>
        <picture>
          <source srcSet="images/calmery.jpg.webp" type="image/webp" />
          <img src="images/calmery.jpg" alt="プロフィールアイコン" />
        </picture>
      </div>
      <div className={styles.biography}>
        <div className={styles.name}>Calmery</div>
        <div className={styles.description}>
          JavaScript と Elm、銀髪赤眼の女の子が好き。イラスト SNS
          の会社でソフトウェアエンジニアしてます。
        </div>
      </div>
    </div>
  </a>
);
