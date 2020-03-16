import * as React from "react";
import styles from "./Backer.scss";

type FanboxPlan = 100 | 300 | 500;

const Crown = ({ plan }: { plan: FanboxPlan }) => {
  switch (plan) {
    case 500:
      return <img src="/images/backers/500.svg" className={styles.crown} />;

    case 300:
      return <img src="/images/backers/300.svg" className={styles.crown} />;

    default:
      return null;
  }
};

type BackerProps = {
  iconUrl: string;
  plan: FanboxPlan;
  url: string;
};

export const Backer: React.SFC<BackerProps> = ({ iconUrl, plan, url }) => {
  return (
    <div className={styles.container}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={iconUrl} className={styles.icon} alt="アイコン" />
      </a>
      <Crown plan={plan} />
    </div>
  );
};
