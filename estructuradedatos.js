var  assert = require('assert');

function min(array){
  var minValue = array[0];
  for(var i =0 ;i < array.length;i++)
  if (array[i]< minValue){
    minValue= array[i]
  }
  return minValue
}

function max(array) {
  var maxValue= array[0];
  for (var i =0;i < array.length;i++)
  if(array[i]> maxValue){
    maxValue= array[i]
  }

  return maxValue
}

function total(array) {
  var acum =0
  for(var i =0 ;i < array.length;i++ ){
    acum= acum + array[i];
  }

  console.log(acum)
  return acum
}

function promedio(array) {
  var promedio= 0;
  var suma = 0;
  for(var i = 0; i < array.length; i++) {
    suma= suma + array[i];
  }
 promedio =  suma / array.length

  console.log(promedio)

  return promedio
}

function varianza(array) {
  var prom = promedio(array)
  var suma = 0
  for(var i =0 ; i< array.length; i++){
    suma = suma + Math.pow(array[i] - prom, 2)
  }
  var resultado = suma / array.length
  console.log(resultado)
  return resultado
}

function Desviacion(array){

}



var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1]
// Mínimo
var minValue = min(array);
console.log(min(array));
assert.equal(minValue, 1, 'Minimo no coincide');
// Maximo valor
var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');

// Total
var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');

// Promedio
var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');

// Desviacion Standart
var stdValue = varianza(array);
assert.ok((stdValue - 696.55) < 0.1, 'Std varianza no coincide');
