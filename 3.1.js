const nb_year = (p0, precent, aug, p) => {
  let pCent = precent/100;
  let n = p0 + (p0 * pCent) + aug;
  let yearCount = 1;
  while (n <= p) {
    n = n + (n * pCent) + aug;
    yearCount ++;
  }
  return yearCount;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));