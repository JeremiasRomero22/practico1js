//3
console.log(3+5)

//4
const nombreUsuario = prompt("Por favor, ingresa tu nombre:")
document.write("Hola nombreUsuario")

//5
var numero1 = (prompt("Ingrese el primer número:"))
var numero2 = (prompt("Ingrese el segundo número:"))
console.log("La suma de los números es: " + (numero1 + numero2))

//6
var numero1 = (prompt("Ingrese el primer número:"))
var numero2 = (prompt("Ingrese el segundo número:"))
if (numero1 > numero2) {
  console.log("El " + numero1 + " es el número más grande.")
} else if (numero2 > numero1) {
  console.log("El " + numero2 + " es el número más grande.")
} else {
  console.log("Los números son iguales.")
}

//7
var numero1 = (prompt("Ingrese el primer número:"))
var numero2 = (prompt("Ingrese el segundo número:"))
var numero3 = (prompt("Ingrese el tercer número:"))
if (numero1 >= numero2 && numero1 >= numero3) {
  console.log("El " + numero1 + " es el número más grande.")
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log("El " + numero2 + " es el número más grande.")
} else {
  console.log("El " + numero3 + " es el número más grande.")
}

//8
var numero = (prompt("Ingrese un número:"))
if (numero % 2 === 0) {
  console.log("El ${numero}es divisible por 2")
} else {
  console.log("El"+numero+"no es divisible por 2.")
}

//9
