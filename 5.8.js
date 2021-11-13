const short = str => {
  let newStr = str.split(` `);
  let longestLength = newStr[0].length;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longestLength) {
      longestLength = newStr[i].length;
    }
}
  return longestLength;
}

console.log(short(`I am iron man`));
console.log(short(`Not this time man`));