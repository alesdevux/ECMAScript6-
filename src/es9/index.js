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
