import { all } from '@redux-saga/core/effects';
import { watcherAddComment, watcherFetchImageDetails, watcherFetchImages } from './ducks/images';

export default function* rootSaga() {
  yield all([
    watcherFetchImages(),
    watcherFetchImageDetails(),
    watcherAddComment()
  ]);
}
