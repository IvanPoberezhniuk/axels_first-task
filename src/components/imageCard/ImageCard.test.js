import { unmountComponentAtNode } from 'react-dom';

import { ImageCard } from '../index';

const setUp = () => render(<ImageCard />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('ImageCard component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

