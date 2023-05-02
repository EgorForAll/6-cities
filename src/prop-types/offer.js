import propTypes from "prop-types";

export const offerValid = {
  offer: propTypes.shape({
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
    img: propTypes.string.isRequired,
    isPremium: propTypes.bool.isRequired,
    isFavorite: propTypes.bool.isRequired,
    type: propTypes.string.isRequired,
    description: propTypes.string.isRequired
  })
};
