import { put, takeLatest } from "redux-saga/effects";

import { register } from "../../../../api/auth.services";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../../../../store/actions/types";

function* signupUser({ payload }) {
  try {
    const response = yield register(payload);
    if ((response.status === 201, response)) {
      yield put({ type: REGISTER_SUCCESS, payload: response });
    } else {
      yield put({ type: REGISTER_FAILURE, error: response?.data?.message || "Something went wrong!" });
    }
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, error: error?.message || "Something went wrong!" });
  }
}

export default function* signupScreenSaga() {
  yield takeLatest(REGISTER_REQUEST, signupUser);
}
