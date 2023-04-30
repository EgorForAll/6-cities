import React from "react";
import Header from "../header/header";
import MainNoEmpty from "./main-no-empty";
import MainEmpty from "./main-empty";
import {offersValid} from "/src/prop-types/offers";

const Main = (props) => {

  const {offers} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      {offers.length > 0 ? <MainNoEmpty {...props}/> : <MainEmpty/>}
    </div>
  );
};

Main.propTypes = offersValid;

export default Main;
