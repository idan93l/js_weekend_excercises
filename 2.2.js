const arr = [1,1,1,1,1];
const binary = arr => {
  const arrString = arr.join(``).toString();
  return Number.parseInt(arrString, 2);
}
console.log(binary(arr));