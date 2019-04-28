import fullPage from "fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js/dist/fullpage.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

const app = Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});

app.ports &&
  (app.ports.fullPage as Elm.Ports.Subscribable).subscribe((path: string) => {
    requestAnimationFrame(() => {
      const controller = new fullPage("#fullPage", {
        afterLoad: (_: {}, { index }: { index: number }) =>
          app.ports &&
          (app.ports.fullPageSectionChanged as Elm.Ports.Sendable).send(index),
        scrollOverflow: true,
        scrollOverflowOptions: {
          scrollbars: false
        }
      });

      // `afterRender` で `controller` を参照するとタイミングによって `undefined` になることがある
      // そのため `requestAnimationFrame` を `afterRender` の代わりに使用する
      requestAnimationFrame(() =>
        controller.silentMoveTo(parseInt(path.slice(1), 10) + 1)
      );
    });
  });
