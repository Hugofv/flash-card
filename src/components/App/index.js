// import { BrowserRouter, Route, Switch } from "react-router-dom";

import FlashCard from "../FlashCard";
import Home from "../Home";
import React from "react";

function App() {
  return (
    <FlashCard />
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact={true} component={Home} />
    //     <Route path="/flash-card" component={FlashCard} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
