import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Appbar from "./components/Appbar/Appbar";
import Posts from "./components/Posts/Posts";
import Status from "./components/Status/Status";
import AuthForm from "./components/Form/AuthForm";
import Error from "./components/Error/Error";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("myProfile")) {
      dispatch({
        type: "USER_EXISTS",
        payload: JSON.parse(localStorage.getItem("myProfile")),
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Appbar />
      <Error></Error>
      <Switch>
        <Route path="/" exact component={Posts}></Route>
        <Route path="/status" exact component={Status}></Route>
        <Route path="/auth" exact component={AuthForm}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
