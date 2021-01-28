import { unmountComponentAtNode } from 'react-dom';

import { Footer } from '../../index';

const setUp = () => render(<Footer />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('Footer component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

