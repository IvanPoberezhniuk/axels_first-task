import { unmountComponentAtNode } from 'react-dom';

import { Provider } from 'react-redux';

import { ImageModal } from '../../index';

import store from '../../redux/configureStore';

const setUp = () => render(<Provider store={store}><ImageModal /></Provider>);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('ImageModal component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

