const short = str => {
  let newStr = str.split(` `);
  let longestLength = newStr[0].length;
  let longestWords = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longestLength) {
      longestLength = newStr[i].length;
    }
  }
  for(let j = 0; j < newStr.length; j++) {
    if (newStr[j].length === longestLength) {
      longestWords.push(newStr[j])
    }
  }
  return longestWords;
}

console.log(short(`I am iron man`));
console.log(short(`Not this time man`));