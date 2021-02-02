import { Comment, Image, ImageDetails } from '../redux/ducks/images';

export const mockedImage: Image = {
  id: 222,
  url: '/fakeUri/images'
};

export const mockedComment: Comment = {
  id: 222,
  text: 'test',
  date: new Date().getSeconds()
};

export const mockedImagesDetails: ImageDetails = {
  id: 222,
  url: '/fakeUri/images',
  comments: [{
    id: 222,
    text: 'test',
    date: new Date().getSeconds()
  }, {
    id: 222,
    text: 'test',
    date: new Date().getSeconds()
  }]
};

export const mockedStore = {
  imagesStore: {
    loading: false,
    images: [],
    imageDetails: {
      id: undefined,
      url: undefined,
      comments: []
    }
  }
};
