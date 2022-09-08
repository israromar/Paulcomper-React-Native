import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE } from "../../../../store/actions/types";

export const signupUser = (user) => ({
  type: REGISTER_REQUEST,
  payload: user,
});
