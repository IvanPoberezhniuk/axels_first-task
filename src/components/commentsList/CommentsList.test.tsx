import { shallow, ShallowWrapper } from 'enzyme';

import { CommentsList } from '../index';

import { Props } from './CommentsList';
import { mockedComment } from '../../__mocks__';

let component: ShallowWrapper;
const setUp = (props?: Props) => shallow(<CommentsList {...props} />);

beforeEach(() => {
  component = setUp({ comments: [mockedComment, mockedComment] });
});

describe('CommentsList component', () => {
  it('should take snapshot', () => {
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

