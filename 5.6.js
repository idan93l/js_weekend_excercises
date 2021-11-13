const mask = str => {
  let newStr = ``;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      newStr += `#`;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(mask(`cant look at most of this`));