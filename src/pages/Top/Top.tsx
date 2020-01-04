import * as React from "react";
import { Card } from "~/components/Card";
import { Header } from "~/components/Header";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { ShareButtons } from "~/components/ShareButtons";
import styles from "./Top.scss";

export const Top: React.FC = () => (
  <React.Fragment>
    <Header />
    <HorizontalScrollView className={styles.articles}>
      {["Dummy", "Dummy", "Dummy", "Dummy", "Dummy"].map((text, index) => (
        <Card
          className={styles.article}
          key={index}
          thumbnail="public/images/ogp.jpg"
        >
          {text}
        </Card>
      ))}
    </HorizontalScrollView>
    <ShareButtons />
  </React.Fragment>
);
