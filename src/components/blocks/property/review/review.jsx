import React from "react";
import {countRating} from "/src/utils/utils";
import propTypes from "prop-types";

const Review = ({review}) => {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${countRating(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: propTypes.shape({
    comment: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    rating: propTypes.number.isRequired,
    user: propTypes.shape({
      avatar_url: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      is_pro: propTypes.bool.isRequired,
      name: propTypes.string.isRequired
    })
  })
};

export default Review;
