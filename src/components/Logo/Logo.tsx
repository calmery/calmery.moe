import * as React from "react";
import styles from "./Logo.scss";

export enum LogoService {
  BACKERS = "backers",
  BOOTH = "booth",
  FANBOX = "fanbox",
  LINE_STORE = "line-store",
  RELATED_SERVICES = "related-services",
}

export const Logo: React.FC<{
  service: LogoService;
}> = ({ service }) => (
  <div className={styles.container}>
    <img src={`images/logo/${service}.svg`} alt="ロゴ" />
  </div>
);
