import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {getUserEmail} from "../../../store/reducers/authorization/selector";
import {CLIENT_PATHES} from "../../../const/const";

const Header = (props) => {;
  const {userEmail} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={CLIENT_PATHES.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={CLIENT_PATHES.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userEmail}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state)
});

export {Header};

export default connect(mapStateToProps, null)(Header);
