import * as React from "react";
import { Biography } from "~/components/Biography";
import { Booth } from "~/components/Booth";
import { Caption } from "~/components/Caption";
import { Fanbox } from "~/components/Fanbox";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { LineStickers } from "~/components/LineStickers";
import { Menu } from "~/containers/Menu";
import styles from "./Top.scss";

export const Top: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <div className={styles.container}>
        <Caption />
        <Biography />
        <LineStickers />
        <Fanbox />
        <Booth />
        <Footer />
      </div>
    </React.Fragment>
  );
};
