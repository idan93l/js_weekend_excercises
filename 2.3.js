const nextSquare = num => {
  let i = Math.sqrt(num);
  if (Math.sqrt(num) % 1 === 0) {
    return - 1;
  } else {
    i++
    }
    return Math.pow(Math.floor(i), 2);
  }

console.log(nextSquare(120));
console.log(nextSquare(121));
console.log(nextSquare(123));