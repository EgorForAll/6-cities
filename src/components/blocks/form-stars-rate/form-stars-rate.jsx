import React, {useEffect, useRef} from "react";
import StarRate from "../../ui/star-rate";
import {connect} from "react-redux";
import propTypes from "prop-types";

const FormStarsRate = ({rate}) => {
  const starsWrapperRef = useRef();

  useEffect(() => {
    const svgNodeList = starsWrapperRef.current.querySelectorAll(`.htmlForm__star-image`);
    const svgArr = Array.prototype.slice.call(svgNodeList, 0);
    svgArr.map((item, index) => {
      if (index <= rate - 1) {
        item.style.fill = `#ff5c00`;
        return;
      }
      item.style.fill = `#000`;
    });
  }, [rate]);

  const createStarsRateComponents = () => {
    const arrayOfStars = [];
    for (let i = 1; i <= 5; i++) {
      arrayOfStars.push(<StarRate key={i} value={i} id={i}/>);
    }
    return arrayOfStars;
  };

  return (
    <div ref={starsWrapperRef} className="reviews__rating-htmlForm htmlForm__rating">
      {createStarsRateComponents().map((item) => item)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rate: state.currentRate
});

FormStarsRate.propTypes = {
  rate: propTypes.number.isRequired
};

export {FormStarsRate};

export default connect(mapStateToProps, null)(FormStarsRate);
