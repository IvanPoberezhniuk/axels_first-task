import { ImageModal } from '../index';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import { Provider } from 'react-redux';

const setUp = () => shallow(<Provider store={store}><BrowserRouter><ImageModal /></BrowserRouter></Provider>);
let component;

beforeEach(() => {
  component = setUp();
});

describe('ImageModal component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});
