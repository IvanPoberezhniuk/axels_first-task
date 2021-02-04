import { shallow, ShallowWrapper } from 'enzyme';

import ImageModal from './ImageModal';

let component: ShallowWrapper;
const mockUseParams = jest.fn();
const mockUseDispatch = jest.fn();
const mockUseSelector = jest.fn();

const setUp = () => shallow(<ImageModal />);

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useParams: () => mockUseParams
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual<object>('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => mockUseSelector
}));

describe('ImageModal Component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});



