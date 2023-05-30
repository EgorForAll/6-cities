import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Header from "/src/components/layout/header/header";
import CardOffer from "../../blocks/card-offer/card-offer";
import PropertyText from "../../ui/property-text";
import {countRating} from "/src/utils/utils";
import {findOffer} from "../../../utils/utils";
import Review from "../../blocks/review/review";
import PropertyGallery from "../../blocks/propety-gallery/property-gallery";
import {AuthorizationStatus, CARD_MODE} from "../../../const/const";
import Map from "../../blocks/map/map";
import {connect} from "react-redux";
import {fetchCommentsList} from "../../../store/api-actions";
import {postComment} from "../../../store/api-actions";
import {useRef} from "react";
import FormStarsRate from "../../blocks/form-stars-rate/form-stars-rate";
import {ActionCreator} from "../../../store/actions";

const PropertyPage = (props) => {
  const {offers, comments, onLoadComments, onPostComment, rate, authorizationStatus, onResetRate, currentOfferComments} = props;
  const commentRef = useRef();
  const submitBtnRef = useRef();
  const history = useHistory();
  const [commentValue, setCommentValue] = useState({value: ``});
  const chosenOfferId = findOffer(offers).id;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authorizationStatus === AuthorizationStatus.AUTH ?
      onPostComment(commentRef.current.value, rate, chosenOfferId)
        : history.push(`/login`);
    commentRef.current.value = '';
    onResetRate();
  };

  useEffect(() => {
    if (commentRef.current.value.length >= 50 && commentRef.current.value.length <= 200) {
      submitBtnRef.current.disabled = false;
      return;
    }
    submitBtnRef.current.disabled = true;
  }, [commentValue])

  useEffect(() => {
    onLoadComments(chosenOfferId);
    return () => {
      onResetRate();
    }
  }, []);

  useEffect(() => {
    if (currentOfferComments.length) {
      const postedCommentDates =  currentOfferComments[currentOfferComments.length - 1];
      comments.push(postedCommentDates);
    }
  }, [currentOfferComments])

  const nearOffers = offers.slice(0, 3);
  const currentOffer = findOffer(offers);
  const createGoodItem = (arrayOfGoods) => arrayOfGoods.map((item) =>
    <li className="property__inside-item" key={arrayOfGoods.indexOf(item)}>
      {item}
    </li>
    )
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={currentOffer.images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium ?
               <div className="property__mark">
                <span>Premium</span>
              </div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${countRating(currentOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.length > 0 ? createGoodItem(currentOffer.goods) : null}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {currentOffer.host.is_pro ? `Pro` : null}
                  </span>
                </div>
                <div className="property__description">
                  <PropertyText text={currentOffer.description}/>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ul className="reviews__list">
                  {comments.length > 0 ? comments.map((item) => <Review key={item.id} review={item}/>) : null}
                </ul>
                <form className="reviews__htmlForm htmlForm" action="#" method="post" onSubmit={(evt) => handleSubmit(evt)}>
                  <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
                  <FormStarsRate />
                  <textarea ref={commentRef} className="reviews__textarea htmlForm__textarea" value={commentValue.value} onChange={(evt) => setCommentValue(evt.target.value)} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button ref={submitBtnRef} className="reviews__submit htmlForm__submit button" type="submit" >Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <div style={{width:`1144px`, height:`100%`, margin: `0 auto`}}>
              <Map city={currentOffer.city} points={nearOffers}/>
            </div>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((item) => <CardOffer key={item.id} offer={item} mode={CARD_MODE.PROPERTY_PAGE}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.loaded_offers,
  comments: state.loaded_comments,
  isCommentsLoaded: state.isCommentsLoaded,
  newComment: state.newComment,
  rate: state.currentRate,
  authorizationStatus: state.authorization_status,
  currentOfferComments: state.commetsById
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(fetchCommentsList(id))
  },
  onPostComment(comment, rating, id) {
    dispatch(postComment({comment, rating}, id))
  },
  onResetRate(){
    dispatch(ActionCreator.resetRating())
  }
})

export {PropertyPage}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
