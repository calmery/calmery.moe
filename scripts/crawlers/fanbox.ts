import { saveData, saveImage, getJson } from "../helpers";
import { CrawlingTargetServices } from "../types";

(async (): Promise<void> => {
  const { body } = await getJson(
    "https://www.pixiv.net/ajax/fanbox/creator?userId=19590898"
  );

  const posts = body.post.items.map(
    ({
      id,
      title,
      coverImageUrl,
      excerpt,
      tags,
      publishedDatetime
    }: {
      id: number;
      title: string;
      coverImageUrl: string | null;
      excerpt: string;
      tags: string[];
      publishedDatetime: string;
    }) => ({
      id,
      title,
      coverImageUrl,
      excerpt,
      tags,
      publishedDatetime
    })
  );

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].coverImageUrl !== null) {
      await saveImage(
        CrawlingTargetServices.FANBOX,
        posts[i].id,
        posts[i].coverImageUrl
      );
    }
  }

  saveData(CrawlingTargetServices.FANBOX, posts);
})();
