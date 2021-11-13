const fibonacci = (signature,n) => {
  let fiboArr = signature;
  for(let i = 1; i < n; i++) {
    fiboArr.push(fiboArr[i] + fiboArr[i-1]);
  }
  return fiboArr[n-1];
}

console.log(fibonacci([1, 1], 12));
console.log(fibonacci([0, 1], 12));