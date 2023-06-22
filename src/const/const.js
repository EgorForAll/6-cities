export const SORT_MENU = {
  POPULAR: `Popular`,
  HIGHT_TO_LOW: `Price: high to low`,
  LOW_TO_HIGH: `Price: low to high`,
  TOP_RATED: `Top rated first`
};

export const CITIES = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const LeafletParameters = {
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy`
};

export const CARD_MODE = {
  MAIN_PAGE: `mainPage`,
  PROPERTY_PAGE: `propertyPage`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  NOT_INIT: `NOT_INIT`
};

export const CLIENT_PATHES = {
  MAIN: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  PROPERTY_PAGE: `/offer/:id`
};

export const FAVORITES_BUTTON_PROPERTY = {
  BUTTON_CLASS_NAME: `property__bookmark-button button`,
  SVG_CLASS_NAME: `property__bookmark-icon`,
  WIDTH: `31`,
  HEIGHT: `33`
};

export const FAVORITES_BUTTON = {
  BUTTON_CLASS_NAME: `place-card__bookmark-button button`,
  SVG_CLASS_NAME: `place-card__bookmark-icon`,
  WIDTH: `18`,
  HEIGHT: `19`
};

export const OFFER_TEST = {
  id: 1,
  city: {
    name: 'Paris',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    preview_image: `https://7.react.pages.academy/six-cities/hotels`,
    images: [ `https://7.react.pages.academy/static/hotel/11.jpg`, `https://7.react.pages.academy/static/hotel/9.jpg`, `https://7.react.pages.academy/static/hotel/7.jpg`, `https://7.react.pages.academy/static/hotel/14.jpg`, `https://7.react.pages.academy/static/hotel/3.jpg`, `https://7.react.pages.academy/static/hotel/2.jpg`, `https://7.react.pages.academy/static/hotel/20.jpg`, `https://7.react.pages.academy/static/hotel/18.jpg`, `https://7.react.pages.academy/static/hotel/10.jpg`, `https://7.react.pages.academy/static/hotel/1.jpg`],
    title: 'https://7.react.pages.academy/six-cities/hotels',
    is_favorite: false,
    is_premiun: true,
    rating: 2.1,
    type: 'house',
    bedrooms: 5,
    max_adults: 8,
    price: 389,
    goods: [`Dishwasher`, `Air conditioning`, `Breakfast`, `Fridge`, `Towels`, `Baby seat`, `Laptop friendly workspace`, `Washer` ],
    host: {
      id: 19,
      name:	`Angelina`,
      is_pro: true,
      avatar_url: `img/avatar-angelina.jpg`
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    location: {
      longitude: 53.534341000000005,
      latitude: 9.998654,
      zoom: 16
    }
  }
}

export const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
