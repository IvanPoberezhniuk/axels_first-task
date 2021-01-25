import { createAction, createSlice } from '@reduxjs/toolkit';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getImageById, getImages } from '../../api/httpRequests';
import ImageModel from '../../models/image.model';

const initialState = {
  loading: false,
  images: [],
  error: false,
  imageDetails: new ImageModel(),
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImageDetails: {
      reducer(state, action) {},
      prepare: (id) => ({
        payload: { id },
      }),
    },
    addComment: {
      reducer(state, action) {},
      prepare: (commentInfo) => ({
        payload: commentInfo,
      }),
    },
    putImages(state, action) {
      state.images = action.payload;
    },
    putImageDetails(state, action) {
      state.imageDetails = new ImageModel(action.payload);
    },
    putComment(state, action) {
      return {
        ...state,
        imageDetails: {
          ...state.imageDetails,
          comments: [...state.imageDetails.comments, action.payload],
        },
      };
    },
    setLoading(state, action) {
      state.loaded = action.payload;
    },
  },
});

export const fetchImages = createAction('images/fetch');

// watchers
export function* watcherFetchImages() {
  yield takeEvery(fetchImages, workerFetchImages);
}

export function* watcherFetchImageDetails() {
  yield takeEvery(fetchImageDetails, (action) => workerImageDetails(action));
}

export function* watcherAddComment() {
  yield takeEvery(addComment, (action) => workerPutComment(action));
}

// workers
function* workerFetchImages() {
  try {
    const images = yield call(getImages);
    yield put(putImages(images));
  } catch (error) {
    console.log(error);
  }
}

function* workerImageDetails(action) {
  try {
    yield put(setLoading(true));
    const image = yield call(() => getImageById(action.payload.id));
    yield put(putImageDetails(image));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

function* workerPutComment(action) {
  try {
    yield put(putComment(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export const {
  fetchImageDetails,
  addComment,
  putImages,
  putImageDetails,
  putComment,
  setLoading,
} = imagesSlice.actions;
export default imagesSlice.reducer;
