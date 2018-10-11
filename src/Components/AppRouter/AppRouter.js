import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "../App/App";
import ErrorPage from "../ErrorPage/ErrorPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/sunsets" component={App} />
      <Route path="/waterfalls" component={App} />
      <Route path="/rainbows" component={App} />
      <Route path="/search" component={App}/>
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
