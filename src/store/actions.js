export const ActionType = {
  TOGGLE_CITY: `toggle city`,
  FOCUS_CITY: `focus city`,
  UNFOCUS_CITY: `unfocus city`,
  ACTIVE_POINT: `active point`,
  CHANGE_SORT_MENU_STATUS: 'open/close sort menu',
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
  onChangeSortMenu: () => ({
    type: ActionType.CHANGE_SORT_MENU_STATUS,
  }),
};
