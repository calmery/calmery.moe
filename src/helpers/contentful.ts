import * as contentful from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN;

enum ContentfulContentType {
  BOOTH = "booth",
  FANBOX = "fanbox",
  LINE = "line"
}

const getEntries = async (contentType: ContentfulContentType) => {
  if (!space || !accessToken) {
    throw new Error(
      "CONTENTFUL_SPACE_ID or CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN is undefined"
    );
  }

  const client = contentful.createClient({
    space,
    accessToken
  });

  // eslint-disable-next-line @typescript-eslint/camelcase
  return await client.getEntries({ content_type: contentType });
};

export const getBooth = () => getEntries(ContentfulContentType.BOOTH);
export const getFanbox = () => getEntries(ContentfulContentType.FANBOX);
export const getLine = () => getEntries(ContentfulContentType.LINE);
