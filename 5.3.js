const toCamelCase = str => {
  let newStr = [...str];
  console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === `-` || newStr[i] === `_`) {
      newStr.splice(i, 1);
      newStr[i] = newStr[i].toUpperCase();
    }
  }
  return newStr.join(``);
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));