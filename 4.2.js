const tribonacci = (signature,n) => {
  const empty = [];
  if(n === 0) {
    return empty;
  }
  let triArr = signature;
  for (i = 2; i < n; i++) {
    triArr.push((triArr[i] + triArr[i-1] + triArr[i-2]));
  }
  return triArr.slice(0, n);
}

console.log(tribonacci([0, 0, 1], 8))
console.log(tribonacci([1, 1, 1,], 8));
console.log(tribonacci([1, 1, 1,], 0));