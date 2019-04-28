import fullPage from "fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js/dist/fullpage.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});

requestAnimationFrame(() => {
  new fullPage("#fullPage", {
    scrollOverflow: true,
    scrollOverflowOptions: {
      scrollbars: false
    }
  });
});
