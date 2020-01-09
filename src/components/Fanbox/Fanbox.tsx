import * as React from "react";
import { Card } from "~/components/Card";
import { HorizontalScrollView } from "~/components/HorizontalScrollView";
import { Logo, LogoService } from "~/components/Logo";
import styles from "./Fanbox.scss";
import data from "~/data/fanbox.json";

type FanboxState = {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl: string | null;
  tags: string[];
};

const FanboxTags: React.FC<{ tags: string[] }> = ({ tags }) => {
  if (tags.length === 0) {
    return (
      <div className={styles.tags}>
        <div className={styles.tag}>タグは付いていません</div>
      </div>
    );
  }

  return (
    <div className={styles.tags}>
      {tags.map((tag: string, index: number) => (
        <div className={styles.tag} key={index}>
          <img src="images/tag.svg" alt="タグ" />
          {tag}
        </div>
      ))}
    </div>
  );
};

export const Fanbox: React.FC = () => {
  if (!data.length) {
    return null;
  }

  return (
    <React.Fragment>
      <Logo service={LogoService.FANBOX} />
      <HorizontalScrollView className={styles.container}>
        {data.map(
          ({ id, title, excerpt, coverImageUrl, tags }: FanboxState, index) => (
            <a
              href={`https://www.pixiv.net/fanbox/creator/19590898/post/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Card
                className={styles.fanbox}
                key={index}
                thumbnail={coverImageUrl || "images/fanbox/default.jpg"}
              >
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{excerpt || "Dummy"}</div>
                <FanboxTags tags={tags} />
              </Card>
            </a>
          )
        )}
      </HorizontalScrollView>
    </React.Fragment>
  );
};
