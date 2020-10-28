import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import EmailAuth from "./EmailAuth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/email" component={EmailAuth} />
      </Switch>
    </div>
  );
}

export default App;
