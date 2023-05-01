import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import LoginPage from "../login/login";
import FavoritesPage from "../favorites-page/favorites-page";
import PropertyPage from "../property-page/property-page";
import PageNotFound from "../page-not-found/page-not-found";
import history from "../../history/history";

const App = (props) => {
  return (
    <>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login:id?" exact component={LoginPage}/>
          <Route path="/favorites" exact>
            <FavoritesPage {...props}/>
          </Route>
          <Route path="/property:id" exact>
            <PropertyPage {...props} />
          </Route>
          <Route path="/:city" exact>
            <Main {...props}/>
          </Route>
          <Route render={() => <PageNotFound />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
