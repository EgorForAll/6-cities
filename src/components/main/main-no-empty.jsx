import React from "react";
import propTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";

const MainNoEmprty = ({appartments}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found"> {appartments.length} places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened" style={{display: `none`}}>
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {appartments.map((item, index) => <CardOffer key={index} offer={item}/>)}
      </div>
    </section>
  );
};

MainNoEmprty.propTypes = {
  appartments: propTypes.shape({
    id: propTypes.number.isRequired,
    price: propTypes.number.isRequired,
    img: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    description: propTypes.string.isRequired
  })
};
export default MainNoEmprty;
