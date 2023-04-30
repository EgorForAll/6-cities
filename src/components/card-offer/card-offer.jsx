import React, {useState} from "react";
import PremiumMark from "../ui/premium-mark";
import BookmarkSvg from "../ui/bookmark-svg";
import {offerValid} from "../../prop-types/offer";

const CardOffer = ({offer}) => {
  const [active, setActive] = useState(false);

  return (
    <article key={offer.id} className="cities__place-card place-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      {offer.isPremium ? <PremiumMark /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price} &euro;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <BookmarkSvg offer={offer}/>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `50%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"></a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

CardOffer.propTypes = offerValid;
export default CardOffer;
