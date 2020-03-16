import * as React from "react";
import { BackerItemData } from "~/helpers/api";
import styles from "./Backer.scss";

const Crown = ({ plan }: Pick<BackerItemData, "plan">) => {
  switch (plan) {
    case 500:
      return <img src="/images/backers/500.svg" className={styles.crown} />;

    case 300:
      return <img src="/images/backers/300.svg" className={styles.crown} />;

    default:
      return null;
  }
};

export const Backer: React.SFC<BackerItemData> = ({ iconUrl, plan, url }) => {
  return (
    <div className={styles.container}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={iconUrl} className={styles.icon} alt="アイコン" />
      </a>
      <Crown plan={plan} />
    </div>
  );
};
