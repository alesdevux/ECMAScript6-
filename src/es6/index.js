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


// DESESTRUCTURACÓN DE ELEMENTOS
let person =  {
  'name': 'Ales',
  'edad': 25,
  'country': 'CA'
}

// Antes 
console.log(person.name, person.edad, person.country);

// Con ES6
let {name, edad} = person;
console.log(name, edad);


// OPERADOR DE PROPAGACIÓN
let team1 = ['Ales', 'Oscar', 'Anna'];
let team2 = ['Nalli', 'Adnaloi', 'Xia'];

// Antes 
let education = ['David', 'Ales', 'Oscar', 'Anna', 'Nalli', 'Adnaloi', 'Xia'];
console.log(education);

// Con ES6
let educationES6 = ['David', ...team1, ...team2];
console.log(educationES6);


// VAR, LET y CONST
{
  var global = 'Soy una variable global';
}

{
  let local = 'Soy una variable local';
  console.log(`Desde local llamamos a ${local}`);
}

console.log(global);
// console.log(local); // Nos da error al no poder acceder

const constante = 'Soy constante';
// constante = 'No soy constante'; // Nos da error al no poder modificar una constante
console.log(constante);


// OBJETOS (Cuando tienen el mismo nombre las keys que las variables)
let name = 'Ales';
let age = 25;

// Antes 
objeto = {
  name: name,
  age: age
}
console.log(objeto);

// Con ES6
objetoES6 = {
  name,
  age
}
console.log(objetoES6);


// ARROW FUNCTIONS
const names = [
  {name: 'Ales', age: 25},
  {name: 'Oscar', age: 32},
  {name: 'Yesica', age: 27},
];

// Antes 
let listOfNames = names.map(function (param) {
  console.log(param.name);
});

// Con ES6
let listOfNamesES6 = names.map(item => console.log(item.name));

const listOfNamesConstES6 = (name, age, country) => {
  console.log(name);
  console.log(age);
  console.log(country);
}

const listOfNamesConstOneES6 = name => {
  console.log(name);
}

const square = num => num * num;


// PROMESAS
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));


// CLASES 
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
  rest(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA - this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));
console.log(calc.rest(7,5));


// MÓDULOS
import { hello } from './module';
console.log(hello());
