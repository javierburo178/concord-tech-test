import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const renderToDOM = () => {
  if (document.getElementById("root") !== null) {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
};

renderToDOM();
export { renderToDOM };
