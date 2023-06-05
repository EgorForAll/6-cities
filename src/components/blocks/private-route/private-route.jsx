import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom/cjs/react-router-dom.min";
import {AuthorizationStatus, CLIENT_PATHES} from "../../../const/const";
import {getAuthorization} from "../../../store/reducers/authorization/selector";
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorization(state),
});

export {PrivateRoute};

export default connect(mapStateToProps, null)(PrivateRoute);
