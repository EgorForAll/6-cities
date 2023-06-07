import React from "react";
import Review from "../review/review";

const ReviewsList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((item) => <Review key={item.id} review={item}/>)}
    </ul>
  );
};

export default ReviewsList;
