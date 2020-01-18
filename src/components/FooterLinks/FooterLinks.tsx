import * as React from "react";
import styles from "./FooterLinks.scss";

const FooterLink: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={`images/links/${name.toLowerCase()}.svg`} alt={name} />
  </a>
);

export const FooterLinks: React.FC = () => (
  <div className={styles.container}>
    <FooterLink
      name="Twitter"
      url="http://twitter.com/share?url=https%3A%2F%2Fcalmery.moe&text=Calmery.moe"
    />
    <FooterLink
      name="LINE"
      url="http://line.me/R/msg/text/?Calmery.moe%20https%3A%2F%2Fcalmery.moe"
    />
    <FooterLink
      name="GitHub"
      url="https://github.com/calmery-chan/calmery.moe"
    />
  </div>
);
