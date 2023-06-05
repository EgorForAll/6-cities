import {nameSpace} from "../../root-reducer";

export const getAuthorization = (state) => state[nameSpace.AUTHORIZATIONS].authorization_status;
export const getUserEmail = (state) => state[nameSpace.AUTHORIZATIONS].userEmail;
