import { shallow, ShallowWrapper } from 'enzyme';

import { CloseIcon } from '../index';

import { Props } from './CloseIcon';

let component: ShallowWrapper;
const setUp = (props: Props) => shallow(<CloseIcon {...props} />);

beforeEach(() => {
  component = setUp({ onIconClick: jest.fn() });
});

describe('CloseIcon component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

