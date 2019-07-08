import "normalize.css";
import "./index.scss";
import { register } from "./serviceWorker";
import { Elm } from "./Main.elm";

register();

Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});

// function animation() {
//   requestAnimationFrame(() => {
//     const container = document.getElementById("articles");
//     const articles = document.querySelectorAll("#articles .article");

//     if (container === null || articles === null) {
//       return animation();
//     }

//     for (let i = 0; i < articles.length; i++) {
//       articles[i].classList.add("fadeIn");
//     }

//     container.addEventListener("scroll", () => {
//       const container = document.getElementById("articles");
//       const articles: NodeListOf<HTMLDivElement> = document.querySelectorAll(
//         "#articles .article"
//       );

//       if (container === null || articles.length <= 3) {
//         return;
//       }

//       const width = articles[0].offsetWidth;
//       const widthAndMargin = articles[1].offsetLeft - articles[0].offsetLeft;
//       const containerWidth = container.offsetWidth;
//       const scrollX = container.scrollLeft;

//       for (let i = 0; i < articles.length; i++) {
//         if (
//           scrollX <= widthAndMargin * i + width / 2 &&
//           widthAndMargin * i - scrollX + width / 2 <= containerWidth
//         ) {
//           articles[i].classList.remove("fadeOut");
//           articles[i].classList.add("fadeIn");
//         } else {
//           articles[i].classList.remove("fadeIn");
//           articles[i].classList.add("fadeOut");
//         }
//       }
//     });
//   });
// }

// animation();
