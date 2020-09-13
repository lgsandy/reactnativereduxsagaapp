import {takeEvery, put} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, loginUser);
}

function* loginUser(action) {
  try {
    // API call
    const {id, name, email} = action.paylod;

    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: id,
        name: name,
        email: email,
      },
    });
  } catch (err) {
    // Handle error
  }
}

export {handler};
