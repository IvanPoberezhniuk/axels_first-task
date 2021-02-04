import { shallow, ShallowWrapper } from 'enzyme';

import { Header } from '../../index';

let component: ShallowWrapper;
const setUp = () => shallow(<Header />);

beforeEach(() => {
  component = setUp();
});

describe('Header component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

