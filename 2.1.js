const arr = [234, 334, 3, 1, 55, 5, -400, 1.2];

const lowestNums = arr => {
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < 0) {
      arr.splice(arr.indexOf(num), 1);
    } 
    if (Math.round(arr[i]) !== arr[i]) {
      arr.splice(arr.indexOf(num), 1);
    }
  }
  
  const x = Math.min(...arr);
  arr.splice(arr.indexOf(x), 1);
  const y =Math.min(...arr);
  return x + y;
}

console.log(lowestNums(arr));