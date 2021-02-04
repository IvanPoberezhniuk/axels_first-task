import { shallow, ShallowWrapper } from 'enzyme';

import { ImageCard } from '../index';

let component: ShallowWrapper;
const setUp = () => shallow(<ImageCard />);

beforeEach(() => {
  component = setUp();
});

describe('ImageCard component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

