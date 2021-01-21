import {all} from '@redux-saga/core/effects';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
  ]);
}
