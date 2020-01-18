import * as React from "react";
import styles from "./Logo.scss";

export enum LogoService {
  BOOTH = "booth",
  FANBOX = "fanbox"
}

export const Logo: React.FC<{
  service: LogoService;
}> = ({ service }) => (
  <div className={styles.container}>
    <img src={`images/logo/${service}.svg`} alt="ロゴ" />
  </div>
);
