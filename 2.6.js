const centuryFromYear = year => {
  let y = year / 100;
  if(y !== Math.floor(y)) {
    return Math.floor(y + 1);
  } else {
    return y;
  }
}
// }

console.log(centuryFromYear(2000))
console.log(centuryFromYear(1966))
console.log(centuryFromYear(1900))