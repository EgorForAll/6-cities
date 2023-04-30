import propTypes from "prop-types";

export const offersValid = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        location: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        img: propTypes.string.isRequired,
        isPremium: propTypes.bool.isRequired,
        isFavorite: propTypes.bool.isRequired,
        type: propTypes.string.isRequired,
        description: propTypes.string.isRequired
      }))
};
