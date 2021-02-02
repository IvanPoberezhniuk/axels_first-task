import GalleryPage from './GalleryPage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mockedImage } from '../../__mocks__';

let component;
const mockUseDispatch = jest.fn();
const mockUseLocation = jest.fn();
const setUp = (props) => shallow(<GalleryPage {...props} />);

beforeEach(async () => {
  component = await setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => ([mockedImage, mockedImage])
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockUseLocation
}));

describe('GalleryPage Component Snapshot', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });

  it('render all images from list', () => {
    expect(component.find(Link).children()).toHaveLength(useSelector(() => {
    }).length);
  });
});


