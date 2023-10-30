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
  console.log("El " + numero1 + " es el número mayor.")
} else if (numero2 > numero1) {
  console.log("El " + numero2 + " es el número mayor.")
} else {
  console.log("Ambos números son iguales.")
}
