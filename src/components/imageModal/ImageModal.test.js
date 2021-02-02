import ImageModal from './ImageModal';

let component;
const mockUseParams = jest.fn();
const mockUseDispatch = jest.fn();
const mockUseSelector = jest.fn();
const setUp = (props) => render(<ImageModal {...props} />);

jest.mock('react-bootstrap', () => ({
  ...jest.requireActual('react-bootstrap'),
  Modal: () => ({ children }) => children
}));

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => mockUseParams
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => mockUseSelector
}));

// describe('useDispatch should be called once', () => {
//   it('useDispatch should be called once', () => {
//     expect(mockUseDispatch).toBeCalledTimes(1);
//   });
// });

describe('ImageModal Component Snapshot', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });

  it('should expect(wrapper.find(Modal)).toHaveLength(1);', function() {

  });
});



