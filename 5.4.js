const toWeirdCase = str => {
  const newStr = [];
  const wordStr = str.split(` `);
  for (let i = 0; i < wordStr.length; i++) {
    newWord = wordStr[i].split(``);
    for (let j = 0; j < wordStr[i].length; j++) {
      if (j % 2 === 0) {
        newWord[j] = newWord[j].toUpperCase(); 
      }
    }
    newStr.push(newWord.join(``));
  }
  return newStr.join(` `);
};

console.log(toWeirdCase(`String`));
console.log(toWeirdCase(`Weird string case`));