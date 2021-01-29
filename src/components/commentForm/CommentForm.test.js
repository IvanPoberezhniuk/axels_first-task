import { Provider } from 'react-redux';

import { CommentForm } from '../index';

import store from '../../redux/configureStore';

const setUp = () => shallow(<Provider store={store}><CommentForm /></Provider>);
let component;

beforeEach(() => {
  component = setUp();
});

describe('CommentForm component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

