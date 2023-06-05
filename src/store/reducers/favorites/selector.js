import {nameSpace} from "../../root-reducer";

export const getFavorites = (state) => state[nameSpace.FAVORITES].favorites;
