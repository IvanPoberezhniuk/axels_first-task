import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import GalleryPage from './GalleryPage';
import store from '../../redux/configureStore';
import React from 'react';

const history = { pathname: '/' };
const setUp = (props) => render(
  <Provider store={store}>
    <MemoryRouter history={history}>
      <GalleryPage {...props} />
    </MemoryRouter>
  </Provider>);

let component;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect
}));

beforeEach(() => {
  component = setUp();
});

describe('GalleryPage component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});
