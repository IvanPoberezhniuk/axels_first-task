import { shallow, ShallowWrapper } from 'enzyme';
import { Link } from 'react-router-dom';

import GalleryPage from './GalleryPage';

import { mockedImage } from '../../__mocks__';

let component: ShallowWrapper;
const mockUseDispatch = jest.fn();
const mockUseLocation = jest.fn();
const setUp = () => shallow(<GalleryPage />);

beforeEach(async () => {
  component = await setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-redux', () => ({
  ...jest.requireActual<object>('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => ([mockedImage, mockedImage])
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useLocation: () => mockUseLocation
}));

describe('GalleryPage component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render all images from list', () => {
    expect(component.find(Link).children()).toHaveLength(2);
  });
});


