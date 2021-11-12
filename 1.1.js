const b = bool => {
bool === true ? console.log(`Yes`) :
bool === false ? console.log(`No`) :
console.log(`Not boolean`);
}

b(true);
b(false);
b(345);