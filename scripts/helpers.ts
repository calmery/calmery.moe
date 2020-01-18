import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";
import { CrawlingTargetServices } from "./types";

export const getDocument = async (url: string) => {
  const response = await fetch(url);
  const html = await response.text();
  const { document } = new JSDOM(html).window;

  return document;
};

export const getJson = async (url: string) => {
  const response = await fetch(url);
  const json = response.json();

  return json;
};

export const saveData = (service: CrawlingTargetServices, data: object) =>
  fs.writeFileSync(
    path.resolve(process.cwd(), `src/data/${service}.json`),
    JSON.stringify(data)
  );

export const saveImage = async (
  service: CrawlingTargetServices,
  id: number,
  imageUrl: string
) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require("pixiv-img")(
    imageUrl,
    path.resolve(process.cwd(), `public/images/${service}/${id}.png`)
  );

  return `public/images/${service}/${id}.png`;
};

export const nodeListToArray = (elements: NodeListOf<Element>): Element[] =>
  [].slice.call(elements);
