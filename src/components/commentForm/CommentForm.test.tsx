import * as redux from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { shallow, ShallowWrapper } from 'enzyme';

import { CommentForm } from '../index';

let component: ShallowWrapper;
const mockUseDispatch = jest.fn();
const setUp = () => shallow(<CommentForm />);

jest.mock('react-redux', () => ({
  ...jest.requireActual<object>('react-redux'),
  useDispatch: () => mockUseDispatch
}));

const spy = jest.spyOn(redux, 'useSelector');

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('CommentForm component', () => {
  it('should take snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Inputs: ', () => {
    it('should render 2 inputs', () => {
      const inputCount = component.find(FormControl).length;
      expect(inputCount).toBe(2);
    });
  });

  describe('Button: ', () => {
    it('should be false onInit', async () => {
      expect(component.find('Button').props().disabled).toBe(false);
    });

    it('should onSubmit call method once', async () => {
      spy.mockReset();
      await component.find('Form').simulate('submit');
      expect(spy).toBeCalledTimes(2);
    });

    it('should onSubmit call method once', async () => {
      await component.find('Button').simulate('click');
      expect(spy).toBeCalledTimes(1);
    });
  });
});
