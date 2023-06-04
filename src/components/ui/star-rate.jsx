import React from "react";
import {ActionCreator} from "../../store/actions";
import {connect} from "react-redux";
import propTypes from "prop-types";

const StarRate = ({value, id, onPutRate}) => {

  return (
    <>
      <input className="htmlForm__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio" onClick={() => onPutRate(value)}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label htmlForm__rating-label" title="good">
        <svg className="htmlForm__star-image" width="37" height="33" id={`star__svg-${id}`}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

StarRate.propTypes = {
  value: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  onPutRate: propTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onPutRate(rate) {
    dispatch(ActionCreator.putRating(rate));
  }
});

export {StarRate};

export default connect(null, mapDispatchToProps)(StarRate);


