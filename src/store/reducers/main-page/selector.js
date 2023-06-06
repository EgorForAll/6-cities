import {nameSpace} from "../../root-reducer";

export const getChosenCity = (state) => state[nameSpace.MAIN].chosenCity;
export const getActivePoint = (state) => state[nameSpace.MAIN].activePoint;
export const checkSortMenuOpening = (state) => state[nameSpace.MAIN].sortMenuOpen;
export const getSortMEnuValue = (state) => state[nameSpace.MAIN].sortMenuValue;
export const getMarkerImage = (state) => state[nameSpace.MAIN].markerImage;
