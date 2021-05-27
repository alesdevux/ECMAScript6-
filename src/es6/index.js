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