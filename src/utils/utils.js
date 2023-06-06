// Расчет рейтинга
export const countRating = (rating) => rating / 5 * 100;

// Сделать первую букву слова заглавной
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Сортировка: сначада дешевые
export const expensiveFirst = (a, b) => {
  return a.price - b.price;
};

// Сортировка: cначала дорогие
export const chipFirst = (a, b) => {
  return b.price - a.price;
};

// Сортировка: сначало высокооцененные
export const topRatedFirst = (a, b) => {
  return b.rating - a.rating;
};

// Поиск выбранного оффера в массиве данных
export const findOffer = (offers) => {
  const currentLocation = window.location.pathname;
  const chosenOffer = offers.find((item) => item.id === Number(currentLocation.substring(7)));
  return chosenOffer;
};


