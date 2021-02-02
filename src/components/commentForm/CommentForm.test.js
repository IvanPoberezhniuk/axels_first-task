import { CommentForm } from '../index';
import { mockedImage } from '../../__mocks__';

const setUp = () => mount(<CommentForm />);
let component;
const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
  useSelector: () => ([mockedImage, mockedImage])
}));

beforeEach(() => {
  component = setUp();
});

describe('CommentForm component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });

  it('test', () => {
    const res = component.find('[className="btn btn-primary btn-block"]').simulate('click');
  });

  it('test', () => {
    const res = component.find('form.comment-form').simulate('submit');
  });
});
