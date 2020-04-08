import * as React from "react";
import styles from "./RelatedServicesItem.scss";

type RelatedServicesItemProps = {
  logoUrl: string;
  url: string;
  underDevelopment?: boolean;
};

export const RelatedServicesItem: React.FC<RelatedServicesItemProps> = ({
  logoUrl,
  url,
  underDevelopment = false,
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className={styles.container}>
      <img src={logoUrl} className={styles.logo} />
      {underDevelopment && (
        <img
          src="/images/related-services/badge.svg"
          className={styles.badge}
        />
      )}
    </div>
  </a>
);
