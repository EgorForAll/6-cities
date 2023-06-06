import React, {useEffect} from "react";
import Header from "/src/components/layout/header/header";
import MainNoEmpty from "/src/components/blocks/main-page-noempty/main-no-empty";
import MainEmpty from "/src/components/blocks/main-page-empty/main-empty";
import {offersValid} from "/src/prop-types/offers";
import {useSelector, useDispatch} from 'react-redux';
import {fetchHotelsList} from "../../../store/api-actions";
import Spinner from "../../ui/spinner";

const Main = () => {
  const {offers, isOffersLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const onLoadHotels = () => dispatch(fetchHotelsList());

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadHotels();
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
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

export default Main;

