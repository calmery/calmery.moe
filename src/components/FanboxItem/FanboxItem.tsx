import * as React from "react";
import { Card } from "~/components/Card";
import { FanboxItemData } from "~/helpers/api";
import styles from "./FanboxItem.scss";

export const FanboxItem: React.FC<FanboxItemData> = ({
  id,
  coverImageUrl,
  title,
  excerpt,
  tags,
}) => (
  <a
    href={`https://www.pixiv.net/fanbox/creator/19590898/post/${id}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card
      className={styles.container}
      thumbnail={[
        {
          url: coverImageUrl,
        },
      ]}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{excerpt || "本文はありません"}</div>
      <div className={styles.tags}>
        {tags.length === 0 ? (
          <div className={styles.tag}>タグは付いていません</div>
        ) : (
          tags.map((tag: string, index: number) => (
            <div className={styles.tag} key={index}>
              <img src="images/tag.svg" alt="タグ" />
              {tag}
            </div>
          ))
        )}
      </div>
    </Card>
  </a>
);
