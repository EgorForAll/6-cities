import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../pages/main-page/main";
import LoginPage from "../pages/login-page/login";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";
import PageNotFound from "../pages/page-not-found/page-not-found";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login:id?" exact component={LoginPage}/>
          <Route path="/favorites" exact>
            <FavoritesPage {...props}/>
          </Route>
          <Route path="/offer/:id" exact render={() => <PropertyPage />}/>
          <Route path="/" render={() => <Main {...props}/>} exact/>
          <Route path="*" render={() => <PageNotFound />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
