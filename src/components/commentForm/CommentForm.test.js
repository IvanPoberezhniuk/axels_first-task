import { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';

import { CommentForm } from '../index';

import store from '../../redux/configureStore';

const setUp = () => render(<Provider store={store}><CommentForm /></Provider>);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('CommentForm component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

