import { CommentsList } from '../index';

let component;
const setUp = () => shallow(<CommentsList />);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch
}));

beforeEach(() => {
  component = setUp();
});

describe('CommentsList component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

