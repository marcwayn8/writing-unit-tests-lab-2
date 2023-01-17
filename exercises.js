function octalToDecimal(octal) {
  let decimal = 0;
  let digits = octal.split('');

  for (let i = 0; i < digits.length; i++) {
    decimal += parseInt(digits[i]) * Math.pow(8, digits.length - i - 1);
  }
  return decimal;
}

function anagram(word, words) {
  let sortedWord = word.split('').sort().join('');
  return words.filter(w => {
    return sortedWord === w.split('').sort().join('');
  });
}

function triangle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180) return 'invalid';
  if (angle1 > 90 || angle2 > 90 || angle3 > 90) return 'obtuse';
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) return 'acute';
  return 'right';
}

function fridayThe13ths(year) {
  let count = 0;
  let date = new Date(`${year}-01-13`);
  while (date.getFullYear() === year) {
    if (date.getDay() === 5) count++;
    date.setDate(date.getDate() + 7);
  }
  return count;
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
