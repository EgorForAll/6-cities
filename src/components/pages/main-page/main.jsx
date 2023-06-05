import React, {useEffect} from "react";
import Header from "/src/components/layout/header/header";
import MainNoEmpty from "/src/components/blocks/main-page-noempty/main-no-empty";
import MainEmpty from "/src/components/blocks/main-page-empty/main-empty";
import {connect} from "react-redux";
import {offersValid} from "/src/prop-types/offers";
import { fetchHotelsList } from "../../../store/api-actions";
import Spinner from "../../ui/spinner";

const Main = ({offers, isDataLoaded, onLoadHotels}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadHotels();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <Spinner />
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
       {offers.length > 0 ? <MainNoEmpty/> : <MainEmpty/>}
    </div>
  );
};

Main.propTypes = offersValid;

const mapStateToProps = ({DATA}) => ({
  offers: DATA.loaded_offers,
  isDataLoaded: DATA.isOffersLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadHotels() {
    dispatch(fetchHotelsList())
  }
})

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

