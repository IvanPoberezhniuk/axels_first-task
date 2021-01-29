import { Header } from '../../index';

const setUp = () => render(<Header />);
let component;

beforeEach(() => {
  component = setUp();
});

describe('Header component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

