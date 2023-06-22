import React from "react";
import PremiumMark from "../../ui/premium-mark";
import FavoriteButton from "../../ui/favaorites-button";
import {offerValid} from "../../../prop-types/offer";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {countRating} from "../../../utils/utils";
import {CARD_MODE} from "../../../const/const";
import {toFocusCity, toUnfocusCity} from "../../../store/actions";
import {useDispatch} from "react-redux";

const CardOffer = ({offer, mode}) => {
  const dispatch = useDispatch();
  const onFocusCity = (point) => dispatch(toFocusCity(point));
  const onUnfocusCity = () => dispatch(toUnfocusCity());

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
          <FavoriteButton offer={offer}/>
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

export default CardOffer;
