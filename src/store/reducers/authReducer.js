import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/types";

const initialState = { loading: false, isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: payload?.data,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.error,
      };
    default:
      return state;
  }
}
