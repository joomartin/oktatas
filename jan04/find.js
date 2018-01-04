const arr = [1,2,3];
const strs = ['sadf', 'wqer', 'hello', 'world'];

const evens = arr.filter(x => x % 2 === 0);
const firstEven = arr.find(x => x % 2 === 0);
const firstString = strs.find(str => str.startsWith('h'));

console.log(evens);
console.log(firstEven);
console.log(firstString);