import React from "react";
import BookmarkSvg from "./bookmark-svg";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postFavorite} from "../../store/api-actions";
import {nameSpace} from "../../store/root-reducer";
import {AuthorizationStatus} from "../../const/const";
import {CLIENT_PATHES, FAVORITES_BUTTON_PROPERTY, FAVORITES_BUTTON} from "../../const/const";

const FavoriteButton = ({offer}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {authorizationStatus} = useSelector((state) => state[nameSpace.AUTHORIZATIONS]);
  const makeOfferFavorite = (id, status) => dispatch(postFavorite(id, status));
  const currentUrl = window.location.href;
  const isPropertyPage = currentUrl.includes('offer');
  const buttonClassName = (checking) => checking ? FAVORITES_BUTTON_PROPERTY.BUTTON_CLASS_NAME : FAVORITES_BUTTON.BUTTON_CLASS_NAME;

  const addToFavoritesState = (offer) => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      let currentStatus = 0;
      offer.is_favorite === false ? currentStatus = 1 : currentStatus = 0;
      makeOfferFavorite(offer.id, currentStatus);
      return;
    };
    history.push(CLIENT_PATHES.LOGIN);
  }

  return (
    <button className={buttonClassName(isPropertyPage)} type="button" onClick={() => addToFavoritesState(offer)}>
      <BookmarkSvg offer={offer} isPropertyPage={isPropertyPage}/>
    </button>
  );
};

export default FavoriteButton;

