import { all } from "redux-saga/effects";

import signupScreenSaga from "../../feature/auth/screens/SignupScreen/saga";

function* rootSaga() {
  yield all([signupScreenSaga()]);
}

export default rootSaga;
