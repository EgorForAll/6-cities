export const ActionType = {
  TOGGLE_CITY: 'toggle city'
};

export const ActionCreator = {
  chosenCity: () => ({
    type: ActionType.TOGGLE_CITY,
  }),
};
