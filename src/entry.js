// SCSS

require("./style.scss");

// Elm

const flags = JSON.stringify({
  message: "Hello World"
});

const { Elm } = require("./elm/Main.elm");

Elm.Main.init({
  node: document.getElementById("elm"),
  flags
});

// For tests

module.exports = {
  flags
};
