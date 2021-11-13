const summation = num => {
  let sum = num;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(2));
console.log(summation(8));