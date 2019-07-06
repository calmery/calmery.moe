import "normalize.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});
