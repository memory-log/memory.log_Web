import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import EmailAuth from "./EmailAuth";
import WritePage from "../pages/WritePage";
import PositionPage from "../pages/PositionPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/email" component={EmailAuth} />
        <Route path="/write" component={WritePage} />
      </Switch>
    </div>
  );
}

export default App;
