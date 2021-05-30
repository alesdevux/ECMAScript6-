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


// Async - Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => resolve('Hello World'), 3000) : reject(new Error('Test Error'));
  });
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}
helloAsync();

// ejecutar correctamente
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}
anotherFunction();
