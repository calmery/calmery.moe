import * as React from "react";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { Biography } from "~/components/Biography";
import { Backers } from "~/containers/Backers";
import { Booth } from "~/containers/Booth";
import { Caption } from "~/components/Caption";
import { Fanbox } from "~/containers/Fanbox";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { LineStore } from "~/containers/LineStore";
import { Menu } from "~/containers/Menu";
import { RelatedServices } from "~/containers/RelatedServices";
import styles from "./Top.scss";

export const Top: React.FC = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Menu />
      <main className={styles.container}>
        <article className={styles.contents}>
          <Caption />
          <Biography />
          <RelatedServices />
          <Fanbox />
          <Booth />
          <LineStore />
          <Backers />
          <Footer />
        </article>
      </main>
    </React.Fragment>
  );
};
