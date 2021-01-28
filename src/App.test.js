import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';

const setUp = () => render(<BrowserRouter><App /></BrowserRouter>);
let component;

beforeEach(() => {
  component = setUp();
});

afterEach(() => {
  unmountComponentAtNode(component);
  component.remove();
  component = null;
});

describe('APP COMPONENT', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

