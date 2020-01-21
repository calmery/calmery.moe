import { getEntries, ContentfulContentType } from "./contentful";

export type BoothItem = {
  id: number;
  name: string;
  thumbnailImageUrl: string[];
};

export const getBooth = async (): Promise<BoothItem[]> => {
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

export type FanboxItem = {
  id: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  tags: string[];
};

export const getFanbox = async (): Promise<FanboxItem[]> => {
  // TODO: モックするにしてもデータは別に分けたい
  if (process.env.NODE_ENV !== "production") {
    return [];
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

export type LineStickerItem = {
  id: number;
  name: string;
  thumbnailImageUrl: string;
};

export const getLine = async (): Promise<LineStickerItem[]> => {
  // TODO: モックするにしてもデータは別に分けたい
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
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
    {
      id: 9903456,
      name: "かるめりちゃん 2",
      thumbnailImageUrl: "images/stickers/2.jpg"
    },
    {
      id: 6457012,
      name: "かるめりちゃん",
      thumbnailImageUrl: "images/stickers/1.jpg"
    },
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

  // const { errors, items } = await getEntries(ContentfulContentType.LINE);

  // if (errors) {
  //   throw errors;
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // return items.map(({ fields }: { fields: any }) => ({
  //   id: fields.id,
  //   name: fields.name,
  //   thumbnailImageUrl: fields.thumbnailImageUrl.fields.file.url
  // }));
};
