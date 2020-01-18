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
            url: "images/biography.jpg.webp"
          },
          {
            url: "images/biography.jpg"
          }
        ]}
      >
        <div className={styles.title}>かるめりちゃんとは？</div>
        <div className={styles.text}>
          かるめりちゃんは明るく好奇心旺盛な女の子で名前は愛々璃（あめり）ちゃん！誕生日は
          3/27 だよ！
        </div>
      </Card>
    ))}
  </React.Fragment>
);
