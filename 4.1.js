const fibonacci = num => {
  let fiboArr = [1,1]
  for(let i = 1; i < num - 1; i++) {
    fiboArr.push(fiboArr[i] + fiboArr[i-1]);
  }
  return fiboArr;
}

const fibonacci2 = num => {
  let fiboArr = [0,1]
  for(let i = 1; i < num; i++) {
    fiboArr.push(fiboArr[i] + fiboArr[i-1]);
  }
  return fiboArr;
}

console.log(fibonacci(12));

console.log(fibonacci2(12));