import React, {useEffect} from "react";
import Header from "../../layout/header/header";
import MainNoEmpty from "../../blocks/main-page-noempty/main-no-empty";
import MainEmpty from "../../blocks/main-page-empty/main-empty";
import {offersValid} from "../../../prop-types/offers";
import {useSelector, useDispatch} from 'react-redux';
import {fetchHotelsList} from "../../../store/api-actions";
import Spinner from "../../ui/spinner";
import {nameSpace} from "../../../store/root-reducer";

const Main = () => {

  const {offers, isOffersLoaded, errorCode} = useSelector((state) => state[nameSpace.DATA]);
  const {isPosted} = useSelector((state) => state[nameSpace.FAVORITES]);
  const dispatch = useDispatch();

  const onLoadHotels = () => dispatch(fetchHotelsList());

  useEffect(() => {
    onLoadHotels();
  }, [isOffersLoaded, isPosted]);

  if (!isOffersLoaded && errorCode != 404) {
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

