function octalToDecimal(str) {
  //Write code here

  const newstr = str.split("").reverse()

  let initial = 0;
  let result = initial;
  for (let i = 0; i < newstr.length; i++) {
    let num = Number(newstr[i])
    result += num * (8 ** i)
  }
  return result
}


function anagram(word, words) {
  //Write code here
  const newarray = [];
  let string = [...word].sort().join("")
  for (let i = 0; i < words.length; i++) {
    if ([...words[i]].sort().join("") === string) {
      newarray.push(words[i])
    }

  }
  return newarray
}


function triangle(a, b, c) {
  //Write code here
  const arr = [a, b, c]
  return arr.reduce((x, y) => x + y) != 180 || arr.some(x => x === 0) ? "invalid" : false ||
    arr.some(x => x === 90 && x != 0) ? "right" : false || arr.some(x => x > 100) ? "obtuse" : "acute"
}

function fridayThe13ths(int) {
  //Write code here
  let count = 0
  for (let i = 0; i <= 12; i++) {
    const friday = new Date(int, i,13);
    if (friday.getDate() && friday.getDay() === 5) {
      count++
    }
  }
  return count;
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
