// Antes
function datosDefectoAntes(name, age, country) {
  var name = name || 'Ales';
  var age = age || 25;
  var country = country || 'CA';
  console.log(name, age, country);
}

// Con ES6
function datosDefectoES6(name = 'Ales', age = 25, country = 'CA') {
  console.log(name, age, country);
}

datosDefectoES6();
datosDefectoES6('Antonio', 34, 'MX');


// TEMPLATE LITERALS
let hello = 'Hello';
let world = 'World';

// Antes 
let tipicalFrase = hello + ' ' + world;
console.log(tipicalFrase);

// Con ES6
let tipicalFraseES6 = `${hello} ${world}`;
console.log(tipicalFraseES6);


// MULTILINEA

// Antes 
let lorem = 'Vestibulum ante ipsum primis in.\n'
  + 'Nullam eu mi et ligula.';
console.log(lorem);

// Con ES6
let loremES6 = `
Morbi sodales rutrum leo, eu.
Praesent volutpat, eros non faucibus. 
`;
console.log(loremES6);