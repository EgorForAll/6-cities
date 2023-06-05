import {nameSpace} from "../../root-reducer";

export const getCurrentRate = (state) => state[nameSpace.RATING].currentRate;
