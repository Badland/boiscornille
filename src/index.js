import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Component from "./Component";
import Contact from "./Contact";
import Header from "./Header";
import HeaderContext from "./HeaderContext";

import { css } from "emotion";

function App() {
  const [menuItems, setMenuItems] = useState(["Home", "About", "Contact"]);

  return (
    <div className={app}>
      <Router>
        <HeaderContext.Provider value={{ menuItems }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Component} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </HeaderContext.Provider>
      </Router>
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
