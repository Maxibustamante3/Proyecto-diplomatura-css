const nombre = prompt("Ingrese su nombre:")
let valorautodeseado = Number(prompt("Ingrese el valor de su auto deseado:"))
let cuotas = Number(prompt("Ingrese la cantidad de cuotas que desea pagar:"))

let resultado = (valorautodeseado / cuotas).toFixed(2)
alert(`Hola ${nombre} su vehiculo cuesta $${valorautodeseado} y la cantidad de cuotas seleccionadas es de ${cuotas}, el total de cada cuota seria de $${resultado} `)






