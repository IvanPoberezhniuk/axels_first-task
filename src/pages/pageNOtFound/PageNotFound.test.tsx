import { shallow, ShallowWrapper } from 'enzyme';

import PageNotFound from './PageNotFound';

let component: ShallowWrapper;
const setUp = () => shallow(PageNotFound());

beforeEach(() => {
  component = setUp();
});

describe('PageNotFound component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

