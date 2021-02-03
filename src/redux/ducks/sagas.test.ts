import { runSaga } from '@redux-saga/core';

import {
  addComment,
  fetchImageDetails,
  putComment,
  putImageDetails,
  putImages,
  setLoading,
  workerFetchImages,
  workerImageDetails,
  workerPutComment
} from './images';
import { mockedComment, mockedImage, mockedImagesDetails } from '../../__mocks__';
import * as api from '../../api/httpRequests';

const id = 123;

afterEach(() => jest.resetAllMocks());

describe('sagas: ', () => {
  describe('workerPutImages()', () => {
    it('should call api and return list of images', async () => {
      const mockedImages = [mockedImage];
      const requestImages = jest.spyOn(api, 'http').mockImplementation(() => Promise.resolve(mockedImages));
      const dispatched: [] = [];

      await runSaga({
        dispatch: (action: never) => dispatched.push(action)
      }, workerFetchImages);

      expect(requestImages).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([putImages(mockedImages)]);
    });

    it('should trow error on bad api request', async () => {
      const spyError = jest.spyOn(console, 'log').mockImplementation(jest.fn);
      jest.spyOn(api, 'http').mockImplementation(() => Promise.reject('error'));

      await runSaga({
        dispatch: () => {
        }
      }, workerFetchImages);

      expect(spyError).toHaveBeenCalledTimes(1);
    });
  });
  describe('workerPutImageDetails()', () => {
    it('should call api and return image details', async () => {
      const imageDetails = mockedImagesDetails;
      const requestImageDetails = jest.spyOn(api, 'http').mockImplementation(() => Promise.resolve(imageDetails));
      const dispatched: [] = [];

      await runSaga({
        dispatch: (action: never) => dispatched.push(action)
      }, workerImageDetails, fetchImageDetails(id));

      expect(requestImageDetails).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([setLoading(true), putImageDetails(imageDetails), setLoading(false)]);
    });

    it('should trow error on bad api request', async () => {
      const consoleLog = jest.spyOn(console, 'log').mockImplementation(jest.fn);
      jest.spyOn(api, 'http').mockImplementation(() => Promise.reject('error'));

      await runSaga({
        dispatch: () => {
        }
      }, workerImageDetails, fetchImageDetails(id));

      expect(consoleLog).toHaveBeenCalledTimes(1);
    });
  });
  it('should add comment to imageDetails comments', async () => {
    const imageDetails = mockedImagesDetails;
    const dispatched: [] = [];

    await runSaga({
      dispatch: (action: never) => dispatched.push(action)
    }, workerPutComment, addComment(mockedComment));

    expect(dispatched).toEqual([setLoading(true), putComment(mockedComment), setLoading(false)]);
  });
});
