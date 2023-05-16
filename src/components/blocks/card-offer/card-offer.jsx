import React from "react";
import PremiumMark from "/src/components/ui/premium-mark";
import BookmarkSvg from "/src/components/ui/bookmark-svg";
import {connect} from "react-redux";
import {offerValid} from "/src/prop-types/offer";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import {countRating} from "/src/utils/utils";
import {CARD_MODE} from "../../../const/const";
import {ActionCreator} from "../../../store/actions";
const CardOffer = (props) => {
  const {offer} = props;
  const {mode} = props;
  const {onFocusCity} = props;
  const {onUnfocusCity} = props;

  return (
    <article key={offer.id} className={`${ mode === CARD_MODE.MAIN_PAGE ? `cities__place-card place-card` : `near-places__card place-card`}`}  onMouseEnter={() => onFocusCity(offer)} onMouseLeave={() => onUnfocusCity(offer)}>
      {offer.isPremium ? <PremiumMark /> : null}
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
          <button className="place-card__bookmark-button button" type="button">
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

const mapDispatchToProps = (dispatch) => ({
  onFocusCity(point) {
    dispatch(ActionCreator.focusCity(point))
  },
  onUnfocusCity() {
    dispatch(ActionCreator.unfocusCity())
  }
});


export  {CardOffer};

export default connect(null, mapDispatchToProps)(CardOffer)
