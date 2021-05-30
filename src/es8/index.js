// Object.entries
const data = {
  frontend: 'Ales',
  backend: 'Jesica',
  design: 'Anna',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// Object.values
const values = Object.values(data);
console.log(values);
console.log(values.length);


// .padStart() - .padEnd()
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------'));
