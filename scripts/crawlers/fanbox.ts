import { saveData, saveImage, getJson } from "../helpers";
import { CrawlingTargetServices } from "../types";

(async (): Promise<void> => {
  const { body } = await getJson(
    "https://www.pixiv.net/ajax/fanbox/creator?userId=19590898"
  );

  const posts = body.post.items
    // 全体公開の記事のみを取得する
    .filter(({ feeRequired }: { feeRequired: number }) => feeRequired === 0)
    .map(
      ({
        id,
        title,
        coverImageUrl,
        excerpt,
        tags
      }: {
        id: number;
        title: string;
        coverImageUrl: string | null;
        excerpt: string;
        tags: string[];
      }) => ({
        id,
        title,
        coverImageUrl,
        excerpt,
        tags
      })
    );

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].coverImageUrl !== null) {
      posts[i].coverImageUrl = await saveImage(
        CrawlingTargetServices.FANBOX,
        posts[i].id,
        posts[i].coverImageUrl
      );
    }
  }

  saveData(CrawlingTargetServices.FANBOX, posts);
})();
