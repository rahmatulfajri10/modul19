const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', () => {
  // complete with another equal example
  expect(reverseString('kasur')).toEqual('rusak');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  // complete with another uppercase equal example
  expect(reverseString('Kasur')).toEqual('rusak');
});
