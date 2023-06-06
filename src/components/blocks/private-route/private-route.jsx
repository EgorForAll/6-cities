import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom/cjs/react-router-dom.min";
import {AuthorizationStatus, CLIENT_PATHES} from "../../../const/const";
import propTypes from "prop-types";
import {nameSpace} from "../../../store/root-reducer";

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state[nameSpace.AUTHORIZATIONS]);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={CLIENT_PATHES.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: propTypes.func.isRequired,
  path: propTypes.string.isRequired,
  exact: propTypes.bool.isRequired
};

export default PrivateRoute;
