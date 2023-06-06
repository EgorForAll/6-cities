import React from "react";
import BookmarkSvg from "/src/components/ui/bookmark-svg";
import {offersValid} from "/src/prop-types/offers";
import {countRating} from "/src/utils/utils";
import FavoriteButton from "../../ui/favaorites-button";

const CardFavorite = ({offer}) => {


  return (
    <article className="favorites__card place-card" key={offer.id}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

CardFavorite.propTypes = offersValid;

export default CardFavorite;
