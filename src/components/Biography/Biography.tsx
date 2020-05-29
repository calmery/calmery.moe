import * as React from "react";
import classNames from "classnames";
import { Card, CardDirection } from "~/components/Card";
import styles from "./Biography.scss";

export const Biography: React.FC = () => (
  <React.Fragment>
    {(["pc", "sp"] as ("pc" | "sp")[]).map((device, index) => (
      <Card
        className={classNames(styles.container, styles[device])}
        direction={CardDirection[device === "pc" ? "ROW" : "COLUMN"]}
        key={index}
        thumbnail={[
          {
            type: "webp",
            url: "images/biography.jpg.webp",
          },
          {
            url: "images/biography.jpg",
          },
        ]}
      >
        <div className={styles.title}>かるめりちゃんとは？</div>
        <div className={styles.text}>
          白咲 愛々璃（あめり）。写真を撮ることが好きな女の子で 17 歳、高校 2
          年生。気配り上手でお世話好きだがちょっとあがり症な一面も。休みの日はよく妹と出かけている。
        </div>
      </Card>
    ))}
  </React.Fragment>
);
