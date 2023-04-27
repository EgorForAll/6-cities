import React from "react";
import propTypes from 'prop-types';
import Header from "../header/header";
import MainNoEmprty from "./main-no-empty";
import MainEmpty from "./main-empty";

const Main = (props) => {
  const {appartments} = props;
  return (
    <div className="page page--gray page--main">
      <Header/>
      {appartments.length > 0 ? <MainNoEmprty {...props}/> : <MainEmpty/>}
    </div>
  );
};

Main.propTypes = {
  appartments: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        price: propTypes.number.isRequired,
        img: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        description: propTypes.string.isRequired
      }))
};

export default Main;
