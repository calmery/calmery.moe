import { nodeListToArray, saveData, saveImage, getDocument } from "../helpers";
import { CrawlingTargetServices } from "../types";

const getItemData = (
  element: Element
): { id: number; name: string; thumbnail: string } => {
  const id = parseInt(element.getAttribute("data-product-id") || "", 10);
  const name = element.querySelector(".item-name a")?.innerHTML || null;
  const thumbnail =
    element.querySelector(".thumb .thumb-inside img")?.getAttribute("src") ||
    null;

  if (isNaN(id) || name === null || thumbnail === null) {
    throw new Error(
      `BOOTH: DOM structure has changed.\n\tid: ${id}\n\tname: ${name}\n\tthumbnail: ${thumbnail}`
    );
  }

  return { id, name, thumbnail };
};

(async (): Promise<void> => {
  const document = await getDocument("https://calmery.booth.pm");

  const result = nodeListToArray(
    document.querySelectorAll(".item-list li")
  ).map(getItemData);

  for (let i = 0; i < result.length; i++) {
    const { id, thumbnail } = result[i];
    await saveImage(CrawlingTargetServices.BOOTH, id, thumbnail);
  }

  saveData(
    CrawlingTargetServices.BOOTH,
    result.map(({ id, name }) => ({ id, name }))
  );
})();
