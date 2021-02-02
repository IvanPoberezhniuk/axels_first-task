import {
  addComment,
  fetchImageDetails,
  fetchImages,
  putComment,
  putImageDetails,
  putImages,
  setLoading
} from './images';
import { mockedComment, mockedImage, mockedImagesDetails } from '../../__mocks__';

describe('actions: ', () => {
  describe('fetchImages() ', () => {
    it('should return object with array of images and type props', () => {
      expect(fetchImages()).toEqual({ type: 'images/fetch' });
    });
  });

  describe('fetchImageDetails() ', () => {
    it('should return object with id and type props', () => {
      expect(fetchImageDetails(123)).toStrictEqual({ type: 'images/fetchImageDetails', payload: { id: 123 } });
    });
  });

  describe('addComment()', () => {
    it('should return object with comment and type props', () => {
      expect(addComment(mockedComment)).toStrictEqual({ type: 'images/addComment', payload: mockedComment });
    });
  });

  describe('putImages()', () => {
    it('should return object with array of images and type props', () => {
      expect(putImages([mockedImage, mockedImage])).toStrictEqual({
        type: 'images/putImages',
        payload: [mockedImage, mockedImage]
      });
    });
  });

  describe('putImageDetails()', () => {
    it('putImageDetails() should return object with images details and type props', () => {
      expect(putImageDetails(mockedImagesDetails)).toStrictEqual({
        type: 'images/putImageDetails',
        payload: mockedImagesDetails
      });
    });
  });

  describe('putComment()', () => {
    it('should return object with id and type props', () => {
      expect(putComment(mockedComment)).toStrictEqual({
        type: 'images/putComment',
        payload: mockedComment
      });
    });
  });

  describe('setLoading()', () => {
    it('should return boolean in payload', () => {
      expect(setLoading(true)).toStrictEqual({
        type: 'images/setLoading',
        payload: true
      });
    });

    it('should not be equal', () => {
      expect(setLoading(true)).not.toEqual({
        type: 'images/setLoading',
        payload: { isLoading: true }
      });
    });
  });
});
