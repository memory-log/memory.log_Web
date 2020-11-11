import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import WriteCommentPage from "../pages/WriteCommentPage";
import ChangePositionPage from "../pages/ChangePositionPage";
import CreatePaperPage from "../pages/CreatePaperPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/create" component={CreatePaperPage} />
        <Route path="/position" component={ChangePositionPage} />
        <Route path="/write" component={WriteCommentPage} />
      </Switch>
    </div>
  );
}

export default App;
