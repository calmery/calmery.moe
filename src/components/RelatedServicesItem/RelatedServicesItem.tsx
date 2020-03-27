import * as React from "react";
import styles from "./RelatedServicesItem.scss";

type RelatedServicesItemProps = { logoUrl: string; url: string };

export const RelatedServicesItem: React.FC<RelatedServicesItemProps> = ({
  logoUrl,
  url
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className={styles.container}>
      <img src={logoUrl} />
    </div>
  </a>
);
