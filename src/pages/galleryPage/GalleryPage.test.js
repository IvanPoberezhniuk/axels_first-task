import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import GalleryPage from './GalleryPage';
import store from '../../redux/configureStore';
import React from 'react';


let component;
const history = { pathname: '/' };
const mockHook = jest.fn();

const setUp = (props) => mount(
  <Provider store={store}>
    <MemoryRouter history={history}>
      <GalleryPage {...props} />
    </MemoryRouter>
  </Provider>);

const mockedUseEffect = jest.spyOn(React, 'useEffect').mockImplementation(mockHook);
const mockedUseDispatch = jest.spyOn(redux, 'useDispatch').mockImplementation(mockHook);

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useLayoutEffect: jest.requireActual('react').useEffect
// }));

describe('GalleryPage component Snapshot', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
  it('useEffect ToBeCalled 1 time', () => {
    expect(mockedUseEffect).toBeCalledTimes(1);
    expect(mockedUseDispatch).toBeCalledTimes(1);
  });
});
