import React from "react";
import BookmarkSvg from "./bookmark-svg";
import {useHistory} from "react-router-dom";
import {addToFavorites} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {nameSpace} from "../../store/root-reducer";
import {AuthorizationStatus} from "../../const/const";
import {CLIENT_PATHES} from "../../const/const";

const FavoriteButton = ({offer}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onAddToFavorites = (offer) => dispatch(addToFavorites(offer));
  const {favorites} = useSelector((state) => state[nameSpace.FAVORITES]);
  const {authorizationStatus} =useSelector((state) => state[nameSpace.AUTHORIZATIONS]);

  const addToFavoritesState = (offer) => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(CLIENT_PATHES.LOGIN);
      return;
    }
    const isInFavorites = favorites.find((item) => item.id === offer.id);
    if (isInFavorites) {
      const pos = favorites.indexOf(isInFavorites);
      onAddToFavorites([...favorites.slice(0, pos), ...favorites.slice(pos + 1)]);
    } else {
      const newFavoritesElement = [offer];
      onAddToFavorites(favorites.concat(newFavoritesElement));
    }
  };

  return (
    <button className="place-card__bookmark-button button" type="button" onClick={() => addToFavoritesState(offer)}>
      <BookmarkSvg offer={offer}/>
    </button>
  );
};

export default FavoriteButton;

