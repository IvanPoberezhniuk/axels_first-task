import Selectors from './index';
import { mockedStore } from '../../__mocks__';

it('should return images', () => {
  expect(Selectors.images(mockedStore)).toBe(mockedStore.imagesStore.images);
});

it('should return image details', () => {
  expect(Selectors.imageDetails(mockedStore)).toBe(mockedStore.imagesStore.imageDetails);
});

it('should return loading', () => {
  expect(Selectors.loading(mockedStore)).toBe(mockedStore.imagesStore.loading);
});
