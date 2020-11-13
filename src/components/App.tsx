import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
// import WritePage from "../pages/WritePage";
// import PositionPage from "../pages/PositionPage";
import ProfilePage from "../pages/ProfilePage";
import WriteCommentPage from "../pages/WriteCommentPage";
import ChangePositionPage from "../pages/ChangePositionPage";
import CreatePaperPage from "../pages/CreatePaperPage";
import AuthContainer from "../containers/Auth/AuthContainer";
import WritePage from "../pages/WriteCommentPage";

function App() {
  return (
    <div className="App">
      <AuthContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/write" component={WritePage} />
        {/* <Route path="/position" component={PositionPage} /> */}
        <Route path="/profile" component={ProfilePage} />
        <Route path="/create" component={CreatePaperPage} />
        <Route path="/position" component={ChangePositionPage} />
        <Route path="/write" component={WriteCommentPage} />
      </Switch>
    </div>
  );
}

export default App;
