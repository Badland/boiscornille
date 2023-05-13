import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";

import { css } from "emotion";

function App() {
  return (
    <div className={app}>
      <Component />
    </div>
  );
}

const app = css`
  text-align: center;
  color: white;
  font-size: 3rem;
  background-color: #419d78;
  height: 20rem;
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
