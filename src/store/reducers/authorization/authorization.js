import {createReducer} from "@reduxjs/toolkit";
import {requireAuthorization, addUserEmail} from "../../actions";
import {AuthorizationStatus} from "../../../const/const";

const initialState = {
  authorization_status: AuthorizationStatus.NOT_INIT,
  userEmail: ``
};

export const AuthorizationReducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorization_status = action.payload;
  });
  builder.addCase(addUserEmail, (state, action) => {
    state.userEmail = action.payload;
  })
});
