import { unmountComponentAtNode } from 'react-dom';

import { CommentsList } from '../index';

const setUp = () => render(<CommentsList />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('CommentsList component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

