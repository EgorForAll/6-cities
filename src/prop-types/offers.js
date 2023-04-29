import propTypes from "prop-types";

export const offersValid = {
  offers: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      price: propTypes.number.isRequired,
      img: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      description: propTypes.string.isRequired
    }))
}
