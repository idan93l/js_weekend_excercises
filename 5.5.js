const initials = newName => {
  let arr = newName.split(' ');
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`
}

console.log(initials(`idan lev`));