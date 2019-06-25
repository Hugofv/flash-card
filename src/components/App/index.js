import { BrowserRouter, Route, Switch } from "react-router-dom";

import FlashCard from "../FlashCard";
import Home from "../Home";
import React, { Fragment } from "react";
import { GlobalStyle } from './styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/flash-card" component={FlashCard} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
