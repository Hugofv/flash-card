import { Router, BrowserRouter, Route, Switch } from "react-router-dom";

import FlashCard from "../FlashCard";
import Home from "../Home";
import React, { Fragment } from "react";
import { GlobalStyle } from './styles';
import history from "../../utils/history";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/flash-card" component={FlashCard} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
