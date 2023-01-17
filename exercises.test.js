const exercises = require('./exercises');

//write tests in this file
test('octalToDecimal', () => {
  expect(octalToDecimal('1')).toBe(1);
  expect(octalToDecimal('10')).toBe(8);
  expect(octalToDecimal('130')).toBe(88);
  expect(octalToDecimal('17')).toBe(15);
  expect(octalToDecimal('2047')).toBe(1063);
  expect(octalToDecimal('11')).toBe(9);
});


test('anagram', () => {
  expect(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])).toEqual(["inlets"]);
  expect(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])).toEqual(["enlist", "inlets"]);
  expect(anagram('abc', ['abc', 'bac', 'cab'])).toEqual(["abc", "bac", "cab"]);
  expect(anagram('abcd', ['abcd', 'bcda', 'cdab'])).toEqual(["abcd", "bcda", "cdab"]);
});

test('triangle', () => {
  expect(triangle(60, 70, 50)).toBe("acute");
  expect(triangle(30, 90, 60)).toBe("right");
  expect(triangle(120, 50, 10)).toBe("obtuse");
  expect(triangle(0, 90, 90)).toBe("invalid");
  expect(triangle(50, 50, 50)).toBe("invalid");
});


test('fridayThe13ths', () => {
  expect(fridayThe13ths(1986)).toBe(1);
  expect(fridayThe13ths(2015)).toBe(3);
  expect(fridayThe13ths(2017)).toBe(2);
  expect(fridayThe13ths(2022)).toBe(2);
  expect(fridayThe13ths(2021)).toBe(2);
});
