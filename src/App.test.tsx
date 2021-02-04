import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { render } from 'enzyme';

let component: cheerio.Cheerio;
const setUp = () => render(<BrowserRouter><App /></BrowserRouter>);

beforeEach(() => {
  component = setUp();
});

describe('APP COMPONENT', () => {
  it('SNAPSHOT', () => {
    expect(component).toMatchSnapshot();
  });
});

