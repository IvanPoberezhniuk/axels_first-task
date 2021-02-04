import { http } from './httpRequests';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('http() method', () => {
  const spied = jest.spyOn(global, 'fetch').mockImplementation(jest.fn());

  it('should be called once', () => {
    http('/test');
    expect(spied).toBeCalledTimes(1);
  });

  it('should be called once', () => {
    http('/test');
    expect(spied).not.toBeCalledTimes(12);
  });
});
