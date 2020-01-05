import * as React from "react";
import styles from "./FooterProfile.scss";

export const FooterProfile: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.icon}>
      <img src="images/calmery.jpg" alt="プロフィールアイコン" />
    </div>
    <div className={styles.biography}>
      <div className={styles.name}>Calmery</div>
      <div className={styles.description}>
        JavaScript と Elm、銀髪赤眼の女の子が好き。イラスト SNS
        の会社でソフトウェアエンジニアしてます。
      </div>
    </div>
  </div>
);
