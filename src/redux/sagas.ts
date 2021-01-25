import { all } from '@redux-saga/core/effects';
import {
  watcherFetchImages,
  watcherFetchImageDetails,
  watcherAddComment,
} from './ducks/images';

export default function* rootSaga() {
  yield all([
    watcherFetchImages(),
    watcherFetchImageDetails(),
    watcherAddComment(),
  ]);
}