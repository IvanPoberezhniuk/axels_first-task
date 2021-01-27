import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from '@redux-saga/core/effects';

import { http } from '../../api/httpRequests';

export interface Comment {
  id: number;
  text: string;
  date: number;
}

export interface Image {
  id: number | undefined;
  url: string | undefined;
}

export interface ImageDetails extends Image {
  comments: Array<Comment>;
}

export interface CurrentDisplayState {
  loading: boolean;
  images: Array<Image>;
  imageDetails: ImageDetails | any;
}

const initialState: CurrentDisplayState = {
  loading: false,
  images: [],
  imageDetails: {
    id: undefined,
    url: undefined,
    comments: [],
  },
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImageDetails: {
      reducer(state, action: PayloadAction<{ id: number }>) {},
      prepare: (id) => ({
        payload: { id },
      }),
    },
    addComment: {
      reducer(state, action: PayloadAction<Comment>) {},
      prepare: (commentInfo) => ({
        payload: commentInfo,
      }),
    },
    putImages(state, action: PayloadAction<Array<ImageDetails>>) {
      state.images = action.payload;
    },
    putImageDetails(state, action) {
      state.imageDetails = action.payload;
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
      state.loading = action.payload;
    },
  },
});

export const fetchImages = createAction<undefined>('images/fetch');

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
    const images = yield call(() => http<Array<Image>>('/images'));
    yield put(putImages(images));
  } catch (error) {
    console.log(error);
  }
}

function* workerImageDetails(action: PayloadAction<{ id: number }>) {
  try {
    yield put(setLoading(true));
    const id = action.payload.id;
    const image = yield call(() => http<ImageDetails>(`/images/${id}`));
    yield put(putImageDetails(image));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

function* workerPutComment(action: PayloadAction<Comment>) {
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
