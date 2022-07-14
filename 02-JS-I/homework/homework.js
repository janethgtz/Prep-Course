// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hello";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 31;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
devolverString ("planta");

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // 
  var sum= x+y;
  return sum; 
  }
  suma (4,9);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
var gato= x-y;
return gato;
 }
 resta (7,3);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
 var multiplicacion=x*y;
  return multiplicacion;
}
multiplica(80*20);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
var division=x/y;
return division;
}
divide (80,7);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y){
    return true;
  }
  return false;
}
sonIguales (90,20);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length===str2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud ("perro","gatito");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  return false;
}
menosQueNoventa (80);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num >50){
    return true;
  }
  return false
}
mayorQueCincuenta (23)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var des = x%y;
  return des;
  }
  obtenerResto (40,10);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num %2==0){
    return true;
    }
    return false;
}
esPar (15);
esPar (80);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num %2==0){
    return false;
    }
    return true;
}
esImpar (12);
esImpar (66);


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var elevar=num**2;
  return elevar;
}
elevarAlCuadrado(45);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo=num**3;
  return cubo;
}
elevarAlCubo (20);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevacion=num**exponent;
  return elevacion;
}
elevar(10,4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo=Math.round(num);
  return redondeo;
}
redondearNumero(40.8);
//redondearNumero(10.2);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeo=Math.ceil(num);
  return redondeo;
}
redondearHaciaArriba(14.8);


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var raro=Math.random();
  return raro;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si 
  //el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0){
  return "Es positivo"; 
  }
  else if (numero < 0){
  return "Es negativo"; 
  }
  else {
  return false;
  } 
}
  esPositivo(15);
  esPositivo (-50);
  

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var exclama=(str + "!");
  return exclama;
}
agregarSimboloExclamacion ("adios")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var completo= (nombre + " " + apellido); 
  return completo;
}
combinarNombres ("Laura", "Perez");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludos=("Hola " + nombre + "!");
  return saludos;
}
obtenerSaludo ("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area=(alto * ancho);
  return area;
  }
obtenerAreaRectangulo (10,30);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro=(lado+lado+lado+lado);
  return perimetro;
}
retornarPerimetro (12);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
var triangulo=(base * altura) / 2;
return triangulo;
}
areaDelTriangulo (12,18);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambio=(euro *1.20);
  return cambio;
}
deEuroAdolar (500);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (typeof letra !="string") {
    throw TypeError("Dato incorrecto");
  }
  if (letra.length != 1){
  return "Dato incorrecto";
  }

  if (letra=="a"){
  return "Es vocal"; 
  }
  else if (letra=="e"){
  return "Es vocal";
  }
  else if (letra=="i"){
  return "Es vocal";
  }
  else if (letra=="o"){
  return "Es vocal";
  }
  else if (letra=="u"){
  return "Es vocal";
  }
else {
return "Dato incorrecto"; 
}
}
esVocal ("g");


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
