import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import WriteCommentPage from "../pages/WriteCommentPage";
import CreatePaperPage from "../pages/CreatePaperPage";
import SearchPaperPage from "../pages/SearchPaperPage";
import AuthContainer from "../containers/Auth/AuthContainer";

function App() {
  return (
    <div className="App">
      <AuthContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/create" component={CreatePaperPage} />
        <Route path="/write" component={WriteCommentPage} />
        <Route path="/search" component={SearchPaperPage} />
      </Switch>
    </div>
  );
}

export default App;
