import { ImageCard } from '../index';

const setUp = () => render(<ImageCard />);
let component;

beforeEach(() => {
  component = setUp();
});

describe('ImageCard component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

