export const ActionType = {
  TOGGLE_CITY: `toggle city`,
  FOCUS_CITY: `focus city`,
  UNFOCUS_CITY: `unfocus city`,
  CHANGE_SORT_MENU_STATUS: `open/close sort menu`,
  CHANGE_SORT_MENU_VALUE: `change sort menu value`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`
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
  })
};
