import PageNotFound from './PageNotFound';

const setUp = () => render(<PageNotFound />);
let component;

beforeEach(() => {
  component = setUp();
});

describe('PageNotFound component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

