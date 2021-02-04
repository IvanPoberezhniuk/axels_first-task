import { mockedComment, mockedImage, mockedImagesDetails, mockedStore } from '../../__mocks__';
import imagesReducer, {
  addComment,
  fetchImageDetails,
  fetchImages,
  putComment,
  putImageDetails,
  putImages,
  setLoading
} from './images';

const store = { ...mockedStore.imagesStore };

describe('reducers: ', () => {
  describe('fetchImages() ', () => {
    it('should not change state', () => {
      const state = imagesReducer(store, fetchImages());
      expect(state).toStrictEqual(store);
    });
  });

  describe('fetchImagesDetails() ', () => {
    it('should not mutate store', () => {
      const state = imagesReducer(store, fetchImageDetails(123));
      expect(state).toStrictEqual(store);
    });
  });

  describe('fetchImagesDetails() ', () => {
    it('should not mutate store', () => {
      const state = imagesReducer(store, fetchImageDetails(123));
      expect(state).toStrictEqual(store);
    });
  });

  describe('addComment() ', () => {
    it('should not mutate store', () => {
      const state = imagesReducer(store, addComment(mockedComment));
      expect(state).toEqual(store);
    });
  });

  describe('putImages()', () => {
    it('should add images to store', () => {
      const images = [mockedImage, mockedImage];
      const state = imagesReducer(store, putImages(images));
      const expectedState = { ...store, images: [...store.images, ...images] };
      expect(state).toStrictEqual(expectedState);
    });
  });

  describe('putImageDetails()', () => {
    it('should add imageDetails to store', () => {
      const state = imagesReducer(store, putImageDetails(mockedImagesDetails));
      const expectedState = { ...store, imageDetails: mockedImagesDetails };
      expect(state).toStrictEqual(expectedState);
    });
  });

  describe('putComment()', () => {
    it('should add comment to imageDetails in store', () => {
      const state = imagesReducer(store, putComment(mockedComment));
      const expectedState = { ...store, imageDetails: { ...store.imageDetails, comments: [mockedComment] } };
      expect(state).toStrictEqual(expectedState);
    });
  });

  describe('setLoading()', () => {
    it('should update loading status to be "true"', () => {
      const state = imagesReducer(store, setLoading(true));
      const expectedState = { ...store, loading: true };
      expect(state).toStrictEqual(expectedState);
    });

    it('should update loading status to be "false"', () => {
      const state = imagesReducer(store, setLoading(false));
      const expectedState = { ...store, loading: false };
      expect(state).toStrictEqual(expectedState);
    });
  });
});
