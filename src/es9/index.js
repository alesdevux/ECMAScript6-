// Spread Operator
const obj = {
  nick: 'Ales',
  age: 25,
  country: 'CA',
};

let {nick, ...all} = obj;
// console.log(nick, all);
// console.log(`name: ${nick}`);
// console.log(all);


// Propagation Properties
const obj1 = {
  ...obj,
  github: 'aleswebgit',
  twitter: 'alesweb'
};
console.log(obj1);


// Promise Finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'));


// Regex -> trabajar con fechas
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-04-23');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
