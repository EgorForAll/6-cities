import {ActionType} from "../../actions";
import {AuthorizationStatus} from "../../../const/const";

const initialState = {
  authorization_status: AuthorizationStatus.NOT_INIT,
  userEmail: ``
};

export default function (state = initialState, action)  {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorization_status: action.payload
      };
    case ActionType.EMAIL_USER:
      return {
        ...state,
        userEmail: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
