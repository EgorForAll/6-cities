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
  ADD_TO_FAVORITES: `add to favorites`,
  DELETE_FROM_FAVORITES: `delete from favorites`,
  POST_COMMENT: `post comment`
};

export const ActionCreator = {
  toggleCity: (parametr) => ({
    type: ActionType.TOGGLE_CITY,
    city: parametr
  }),
  focusCity: (point) => ({
    type: ActionType.FOCUS_CITY,
    activePoint: point
  }),
  unfocusCity: () => ({
    type: ActionType.UNFOCUS_CITY,
  }),
  onChangeSortMenuStatus: () => ({
    type: ActionType.CHANGE_SORT_MENU_STATUS,
  }),
  onChangeSortMenuValue: (value) => ({
    type: ActionType.CHANGE_SORT_MENU_VALUE,
    newValue: value
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  addUserEmail: (email) => ({
    type: ActionType.EMAIL_USER,
    payload: email
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  addToFavorites: (offers) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: offers
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment
  })
};
