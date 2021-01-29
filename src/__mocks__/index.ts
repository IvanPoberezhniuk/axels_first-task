import { Comment, Image, ImageDetails } from '../redux/ducks/images';

const image: Image = {
  id: 222,
  url: '/fakeUri/images'
};

const comment: Comment = {
  id: 222,
  text: 'test',
  date: new Date().getSeconds()
};

const imagesDetails: ImageDetails = {
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
