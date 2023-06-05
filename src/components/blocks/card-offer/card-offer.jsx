import React from "react";
import PremiumMark from "/src/components/ui/premium-mark";
import BookmarkSvg from "/src/components/ui/bookmark-svg";
import {connect} from "react-redux";
import {offerValid} from "/src/prop-types/offer";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {countRating} from "/src/utils/utils";
import {CARD_MODE} from "../../../const/const";
import {toFocusCity, toUnfocusCity, addToFavorites} from "../../../store/actions";
import {getFavorites} from "../../../store/reducers/favorites/selector";

const CardOffer = ({offer, mode, onFocusCity, onUnfocusCity, onAddToFavorites, favorites}) => {

  const addToFavoritesState = (offer) => {
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
    <article key={offer.id} className={`${ mode === CARD_MODE.MAIN_PAGE ? `cities__place-card place-card` : `near-places__card place-card`}`}  onMouseEnter={() => onFocusCity(offer)} onMouseLeave={() => onUnfocusCity(offer)}>
      {offer.is_premium ? <PremiumMark /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price} &euro;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button" onClick={() => addToFavoritesState(offer)}>
            <BookmarkSvg offer={offer}/>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${countRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={'/offer/' + `${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

CardOffer.propTypes = offerValid;

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
})

const mapDispatchToProps = (dispatch) => ({
  onFocusCity(point) {
    dispatch(toFocusCity(point))
  },
  onUnfocusCity() {
    dispatch(toUnfocusCity())
  },
  onAddToFavorites(offer) {
    dispatch(addToFavorites(offer))
  }
});


export  {CardOffer};

export default connect(mapStateToProps, mapDispatchToProps)(CardOffer)
