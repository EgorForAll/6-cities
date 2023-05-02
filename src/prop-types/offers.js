import propTypes from "prop-types";

export const offersValid = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        city: propTypes.shape({
          location: propTypes.shape({
            latitude: propTypes.number.isRequired,
            longitude: propTypes.number.isRequired,
            zoom: propTypes.number.isRequired
          }),
          name: propTypes.string.isRequired
        }),
        price: propTypes.number.isRequired,
        images: propTypes.array.isRequired,
        isPremium: propTypes.bool.isRequired,
        isFavorite: propTypes.bool.isRequired,
        type: propTypes.string.isRequired,
        description: propTypes.string.isRequired
      }))
};
