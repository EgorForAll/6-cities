import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  TOGGLE_CITY: `toggle city`,
  FOCUS_CITY: `focus city`,
  UNFOCUS_CITY: `unfocus city`,
  CHANGE_SORT_MENU_STATUS: `open/close sort menu`,
  CHANGE_SORT_MENU_VALUE: `change sort menu value`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  EMAIL_USER: `user/email`,
  LOAD_HOTELS: `data/loadHotels`,
  LOAD_COMMENTS: `data/loadComments`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  LOAD_FAVORITES: 'data/loadFavorites',
  ADD_REMOVE_FAVORITES: `data/add or remove favorites`,
  POST_COMMENT: `post comment`,
  ADD_A_COMMENT: `add a comment`,
  PUT_A_RATING: `put a rating`,
  RESET_A_RATING: `reset a rating`,
  LOAD_COMMENTS_BY_ID: `load comments by id`,
  HANDLE_ERROR: `handle error`
};

// Взаимодействие с компонентами на главной странице
export const toToggleCity = createAction(ActionType.TOGGLE_CITY, (toggledCity) => {
  return {
    payload: toggledCity
  }
});

export const toFocusCity = createAction(ActionType.FOCUS_CITY, (point) => {
  return {
    payload: point
  }
});

export const toUnfocusCity = createAction(ActionType.UNFOCUS_CITY);
export const onChangeSortMenuStatus = createAction(ActionType.CHANGE_SORT_MENU_STATUS);

export const onChangeSortMenuValue = createAction(ActionType.CHANGE_SORT_MENU_VALUE, (value) => {
  return {
    payload: value
  }
});

// Авторизация
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  }
});

export const addUserEmail = createAction(ActionType.EMAIL_USER, (email) => {
  return {
    payload: email
  }
});

// Работа с данными
export const onLoadHotels = createAction(ActionType.LOAD_HOTELS, (hotels) => {
  return {
    payload: hotels
  }
});

export const onLoadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments
  }
});

export const onPostComment = createAction(ActionType.POST_COMMENT);

export const addComment = createAction(ActionType.ADD_A_COMMENT, (comment) => {
  return {
    payload: comment
  }
});

export const handleError = createAction(ActionType.HANDLE_ERROR, (err) => {
  return {
    payload: err
  }
});

// Роутинг
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  }
});

// Работа с избранным
export const loadFavoritesList = createAction(ActionType.LOAD_FAVORITES, (offers) => {
  return {
    payload: offers
  }
});

export const addRemoveFavorites = createAction(ActionType.ADD_REMOVE_FAVORITES);

// Рейтинг
export const onPutRating = createAction(ActionType.PUT_A_RATING, (rate) => {
  return {
    payload: rate
  }
});

export const resetRating = createAction(ActionType.RESET_A_RATING);


