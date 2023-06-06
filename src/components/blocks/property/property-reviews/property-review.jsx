import React, {useEffect, useRef} from "react";
import Review from "../review/review";
import FormStarsRate from "../form-stars-rate/form-stars-rate";
import PropertyTextArea from "../property-textarea/property-textarea";
import {AuthorizationStatus, CLIENT_PATHES} from "../../../../const/const";
import {fetchCommentsList, postComment} from "../../../../store/api-actions";
import {resetRating} from "../../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {nameSpace} from "../../../../store/root-reducer";

const PropertyReview = ({offer}) => {
  const {comments, isCommentPosted} = useSelector((state) => state[nameSpace.DATA]);
  const {authorizationStatus} = useSelector((state) => state[nameSpace.AUTHORIZATIONS]);
  const {currentRate} = useSelector((state) => state[nameSpace.RATING]);

  const dispatch = useDispatch();
  const onPostComment = (comment, rating, id) => dispatch(postComment({comment, rating}, id));
  const onLoadComments = (id) => dispatch(fetchCommentsList(id));
  const onResetRate = () => dispatch(resetRating());

  const commentRef = useRef();
  const submitBtnRef = useRef();

  const chosenOfferId = offer.id;

  useEffect(() => {
    onLoadComments(chosenOfferId);
    return () => {
      onResetRate();
    }
  }, [isCommentPosted, window.location.href]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authorizationStatus === AuthorizationStatus.AUTH ?
      onPostComment(commentRef.current.value, currentRate, chosenOfferId)
        : history.push(CLIENT_PATHES.LOGIN);
    commentRef.current.value = '';
    onResetRate();
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.length > 0 ? comments.map((item) => <Review key={item.id} review={item}/>) : null}
      </ul>
      <form className="reviews__htmlForm htmlForm" action="#" method="post" onSubmit={(evt) => handleSubmit(evt)}>
        <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
        <FormStarsRate />
        <PropertyTextArea submitBtnRef={submitBtnRef} commentRef={commentRef}/>
      </form>
    </section>
  );
};


export default PropertyReview;
