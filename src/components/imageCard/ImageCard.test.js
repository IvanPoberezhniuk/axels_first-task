import { ImageCard } from '../index';

let component;
const setUp = () => shallow(<ImageCard />);

beforeEach(() => {
  component = setUp();
});

describe('ImageCard component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

