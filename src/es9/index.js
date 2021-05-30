// Spread Operator
const obj = {
  nick: 'Ales',
  age: 25,
  country: 'CA',
};

let {nick, ...all} = obj;
console.log(nick, all);
console.log(`name: ${nick}`);
console.log(all);