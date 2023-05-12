export const ActionType = {
  TOGGLE_CITY: 'toggle city'
};

export const ActionCreator = {
  toggleCity: (parametr) => ({
    type: ActionType.TOGGLE_CITY,
    city: parametr
  }),
};
