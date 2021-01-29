import { CommentsList } from '../index';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

const setUp = () => shallow(<Provider store={store}><CommentsList /></Provider>);
let component;

beforeEach(() => {
  component = setUp();
});

describe('CommentsList component', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

