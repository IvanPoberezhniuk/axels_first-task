import { unmountComponentAtNode } from 'react-dom';

import GalleryPage from './GalleryPage';

const setUp = () => render(<GalleryPage />);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('GalleryPage component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

