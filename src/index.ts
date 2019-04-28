import fullPage from "fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js/dist/fullpage.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

const state: {
  controller: {
    silentMoveTo: (nextIndex: number) => void;
    getActiveSection: () => number;
    moveTo: (nextIndex: number) => void;
  } | null;
} = {
  controller: null
};

const app = Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});

const ports = app.ports as {
  fullPage: Elm.Ports.Subscribable;
  fullPageSectionChanged: Elm.Ports.Sendable;
  onUrlChanged: Elm.Ports.Subscribable;
};

ports.fullPage.subscribe((section: number) => {
  requestAnimationFrame(() => {
    state.controller = new fullPage("#fullPage", {
      onLeave(_: {}, { index: nextSection }: { index: number }) {
        // TODO: 初回の移動の際にも呼ばれることに注意する
        ports.fullPageSectionChanged.send(nextSection);
      },
      scrollOverflow: true,
      scrollOverflowOptions: {
        scrollbars: false
      }
    });

    // `afterRender` で `controller` を参照するとタイミングによって `undefined` になることがある
    // そのため `requestAnimationFrame` を `afterRender` の代わりに使用する
    requestAnimationFrame(() => {
      const { controller } = state;
      controller && controller.silentMoveTo(section + 1);
    });
  });
});
