import { http } from './httpRequests';

describe('http()', () => {
  jest.spyOn(global, 'fetch').mockImplementation({})
  test('should be called once', async () => {
    const result = await http('test');
    await expect(result).toBeCalledTimes(12);
  });
});
