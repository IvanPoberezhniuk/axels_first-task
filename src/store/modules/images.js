import {createSlice} from '@reduxjs/toolkit';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {getImageById, getImages} from '../../api/httpRequests';
import ImageModel from '../../models/image.model';

const initialState = {
  loading: false,
  images: [],
  error: false,
  imageDetails: new ImageModel()
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImages(state, action) {
    },
    fetchImageDetails: {
      reducer(state, action) {
      },
      prepare: (id) => ({
        payload: {id}
      })
    },
    addComment: {
      reducer(state, action) {
      },
      prepare: (commentInfo) => ({
        payload: commentInfo
      })
    },
    putImages(state, action) {
      state.images = action.payload;
    },
    putImageDetails(state, action) {
      state.imageDetails = new ImageModel(action.payload);
    },
    putComment(state, action) {
      // state.imageDetails.comments.push(action.payload);
      return {
        ...state,
        imageDetails: {...state.imageDetails, comments: [...state.imageDetails.comments, action.payload]}
      };
    },
    setLoaded(state, action) {
      state.loaded = action.payload;
    },
  },
});

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
  } catch (e) {
    console.log(e);
  }
}

function* workerImageDetails(action) {
  try {
    const image = yield call(() => getImageById(action.payload.id));
    yield put(putImageDetails(image));
  } catch (e) {
    console.log(e);
  }
}

function* workerPutComment(action) {
  try {
    yield put(putComment(action.payload));
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export const {
  fetchImages,
  fetchImageDetails,
  addComment,
  putImages,
  putImageDetails,
  putComment,
  setLoaded
} = imagesSlice.actions;
export default imagesSlice.reducer;
