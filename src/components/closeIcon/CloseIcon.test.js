import { CloseIcon } from '../index';

const setUp = () => render(<CloseIcon />);
let component;

beforeEach(() => {
  component = setUp();
});

describe('CloseIcon component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

