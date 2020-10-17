import _ from '../index.js';

test('return last element', () => {
  expect(_.last(['one', 'two'])).toBe('two');
});
