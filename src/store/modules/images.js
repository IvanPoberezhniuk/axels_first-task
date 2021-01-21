import {createSlice} from '@reduxjs/toolkit';

const GET_IMAGES_LIST = 'images/get';
const GET_IMG = 'image/get';

const initialState = {
  loaded: false,
  images: [],
  error: false
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    getImages(state, action) {
      state.push(...action.payload);
    }
  }
});

export const {getImages} = imagesSlice.actions;
export default imagesSlice.reducer;

// export const getImagesList = (id) => {
//   return {
//     type: GET_IMAGES_LIST,
//     payload: id
//   };
// };
//
// export const getImg = (id) => {
//   return {
//     type: GET_IMG,
//     payload: id
//   };
// };
