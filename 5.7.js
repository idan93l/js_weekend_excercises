const short = str => {
  let newStr = str.split(` `);
  let shortestLength = newStr[0].length;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length < shortestLength) {
      shortestLength = newStr[i].length;
    }
}
  return shortestLength;
}

console.log(short(`I am iron man`));
console.log(short(`Not this time man`));