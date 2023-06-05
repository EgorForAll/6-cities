import {nameSpace} from "../../root-reducer";

export const getChosenCity = (state) => state[nameSpace.MAIN].chosen_city;
export const getActivePoint = (state) => state[nameSpace.MAIN].active_point;
export const checkSortMenuOpening = (state) => state[nameSpace.MAIN].sort_menu_open;
export const getSortMEnuValue = (state) => state[nameSpace.MAIN].sort_menu_value;
export const getMarkerImage = (state) => state[nameSpace.MAIN].markerImage;
