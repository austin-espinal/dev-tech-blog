const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.notcoolstuff.com/abcdefg/');
  const url3 = format_url('https://www.amazon.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('notcoolstuff.com');
  expect(url3).toBe('amazon.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('monkey', 1);
  const word2 = format_plural('dog', 2);

  expect(word1).toBe('monkey');
  expect(word2).toBe('dogs');
});

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});