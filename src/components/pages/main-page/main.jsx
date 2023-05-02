import React from "react";
import Header from "/src/components/layout/header/header";
import MainNoEmpty from "/src/components/blocks/main-page-noempty/main-no-empty";
import MainEmpty from "/src/components/blocks/main-page-empty/main-empty";
import {offersValid} from "/src/prop-types/offers";

const Main = (props) => {
  const {offers} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      {offers.length > 0 ? <MainNoEmpty offers={offers}/> : <MainEmpty/>}
    </div>
  );
};

Main.propTypes = offersValid;

export default Main;
