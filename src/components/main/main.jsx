import React from "react";
import Header from "../header/header";
import MainNoEmprty from "./main-no-empty";
import MainEmpty from "./main-empty";
import {offersValid} from "/src/prop-types/offers"

const Main = (props) => {

  const {offers} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      {offers.length > 0 ? <MainNoEmprty {...props}/> : <MainEmpty/>}
    </div>
  );
};

Main.propTypes = offersValid;

export default Main;
