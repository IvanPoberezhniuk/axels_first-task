import { unmountComponentAtNode } from 'react-dom';

import { Header } from '../../index';

const setUp = () => render(<Header />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('Header component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

