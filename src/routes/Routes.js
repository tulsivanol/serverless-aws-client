import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/Login";
import Signup from "../container/Signup";
import NewNote from "../container/NewNote";
import Notes from "../container/Notes";
import Settings from "../container/Settings";
import NotFound from "../container/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/notes/new">
        <NewNote />
      </Route>
      /
      <Route exact path="/notes/:id">
        <Notes />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
