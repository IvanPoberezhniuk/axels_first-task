import { CommentsList } from '../index';
import { mockedComment } from '../../__mocks__';

let component;
const setUp = (props) => shallow(<CommentsList {...props} />);

beforeEach(() => {
  component = setUp({ comments: [mockedComment, mockedComment] });
});

describe('CommentsList component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render 2 comments', () => {
    const comments = component.find('Styled(ListGroupItem)');
    expect(comments.length).toBe(2);
  });

  it('should render 2 comments', () => {
    component = setUp();

    const comments = component.find('Styled(ListGroupItem)');
    expect(comments.length).toBe(0);
  });
});

