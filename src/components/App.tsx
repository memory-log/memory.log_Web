import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import WritePage from "../pages/WritePage";
import PositionPage from "../pages/PositionPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/position" component={PositionPage} />
      </Switch>
    </div>
  );
}

export default App;
