import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../pages/main-page/main";
import LoginPage from "../pages/login-page/login";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import PrivateRoute from "../blocks/private-route/private-route";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage}/>
          <PrivateRoute
            path="/favorites"
            exact
            render={() => <FavoritesPage {...props}/>}>
          </PrivateRoute>
          <Route path="/offer/:id" exact render={() => <PropertyPage />}/>
          <Route path="/" render={() => <Main {...props}/>} exact/>
          <Route path="*" render={() => <PageNotFound />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
