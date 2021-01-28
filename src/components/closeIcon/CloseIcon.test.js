import { unmountComponentAtNode } from 'react-dom';

import { CloseIcon } from '../index';

const setUp = () => render(<CloseIcon />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('CloseIcon component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

