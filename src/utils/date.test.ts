import { convertDate } from './date';

it('should convert date', function() {
  expect(convertDate(12312312313)).toBe('5.23.1970');
});
