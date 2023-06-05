import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom/cjs/react-router-dom.min";
import {AuthorizationStatus, CLIENT_PATHES} from "../../../const/const";
import propTypes from "prop-types";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {

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
  authorizationStatus: propTypes.string.isRequired,
  exact: propTypes.bool.isRequired
};

const mapStateToProps = ({AUTHORIZATION}) => ({
  authorizationStatus: AUTHORIZATION.authorization_status,
});

export {PrivateRoute};

export default connect(mapStateToProps, null)(PrivateRoute);
