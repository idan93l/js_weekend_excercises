const findUnique = arr => {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) {
      return arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  }
console.log(findUnique([2, 1, 1, 1, 1]));
console.log(findUnique([2, 2, 2, 2, 1]));
console.log(findUnique([3, 3, 0.45, 3, 3]));