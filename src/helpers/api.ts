import { getEntries, ContentfulContentType } from "./contentful";

export type BoothItemData = {
  id: number;
  name: string;
  thumbnailImageUrl: string[];
};

export const getBoothItemData = async (): Promise<BoothItemData[]> => {
  // TODO: モックするにしてもデータは別に分けたい
  if (process.env.NODE_ENV !== "production") {
    return [
      {
        id: 1270166,
        name: "かるめりちゃんステッカー",
        thumbnailImageUrl: ["images/booth/1270166.png"]
      },
      {
        id: 1714889,
        name: "かるめりちゃんクリアファイル",
        thumbnailImageUrl: ["images/booth/1714889.png"]
      }
    ];
  }

  const { errors, items } = await getEntries(ContentfulContentType.BOOTH);

  if (errors) {
    throw errors;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.map(({ fields }: { fields: any }) => ({
    id: fields.id,
    name: fields.name,
    thumbnailImageUrl: fields.thumbnailImageUrl.map(
      ({
        fields: {
          file: { url }
        }
      }: {
        fields: { file: { url: string } };
      }) => url
    )
  }));
};

export type FanboxItemData = {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  tags: string[];
};

export const getFanboxItemData = async (): Promise<FanboxItemData[]> => {
  // TODO: モックするにしてもデータは別に分けたい
  if (process.env.NODE_ENV !== "production") {
    return [
      {
        id: "1",
        title: "Title",
        excerpt: "Excerpt",
        coverImageUrl: "images/ogp.jpg",
        tags: []
      },
      {
        id: "1",
        title: "Title",
        excerpt: "Excerpt",
        coverImageUrl: "images/ogp.jpg",
        tags: []
      },
      {
        id: "1",
        title: "Title",
        excerpt: "Excerpt",
        coverImageUrl: "images/ogp.jpg",
        tags: []
      },
      {
        id: "1",
        title: "Title",
        excerpt: "Excerpt",
        coverImageUrl: "images/ogp.jpg",
        tags: []
      }
    ];
  }

  const { errors, items } = await getEntries(ContentfulContentType.FANBOX);

  if (errors) {
    throw errors;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.map(({ fields }: { fields: any }) => ({
    id: fields.id,
    title: fields.title,
    excerpt: fields.excerpt,
    tags: fields.tags,
    coverImageUrl: fields.coverImageUrl.fields.file.url
  }));
};

export type LineStoreItemData = {
  id: number;
  name: string;
  thumbnailImageUrl: string;
};

export const getLineStoreItemData = async (): Promise<LineStoreItemData[]> => {
  // TODO: モックするにしてもデータは別に分けたい
  if (process.env.NODE_ENV !== "production") {
    return [
      {
        id: 9903456,
        name: "かるめりちゃん 2",
        thumbnailImageUrl: "images/stickers/2.jpg"
      },
      {
        id: 6457012,
        name: "かるめりちゃん",
        thumbnailImageUrl: "images/stickers/1.jpg"
      }
    ];
  }

  const { errors, items } = await getEntries(ContentfulContentType.LINE);

  if (errors) {
    throw errors;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.map(({ fields }: { fields: any }) => ({
    id: fields.id,
    name: fields.name,
    thumbnailImageUrl: fields.thumbnailImageUrl.fields.file.url
  }));
};
