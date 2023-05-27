import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AuthorizationStatus } from "../../../const/const";
import {  } from "react";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
 return (
  <Route
  path={path}
  exact={exact}
  render={(routeProps) => {
    return (
      authorizationStatus === AuthorizationStatus.AUTH
        ? render(routeProps)
        : <Redirect to={"/login"} />
    );
    }}
  />
 )
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorization_status,
});

export {PrivateRoute};

export default connect(mapStateToProps, null)(PrivateRoute)
