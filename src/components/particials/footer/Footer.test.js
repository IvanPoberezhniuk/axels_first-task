import { Footer } from '../../index';

const setUp = () => render(<Footer />);
let component;

beforeEach(() => {
  component = setUp();
});


describe('Footer component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

