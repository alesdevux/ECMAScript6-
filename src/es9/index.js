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
