import { unmountComponentAtNode } from 'react-dom';

import PageNotFound from './PageNotFound';

const setUp = () => render(<PageNotFound />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('PageNotFound component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

