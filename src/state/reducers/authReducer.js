import { ActionType } from "../actions/actionTypes";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case ActionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: null,
      };
    case ActionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
