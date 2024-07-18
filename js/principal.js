/**
 * Se conoce el nombre, tipo de vendedor (1=Mayorista, 2=Minorista) y monto de ventas de
varios vendedores. Se desea determinar Monto total de la ventas de los vendedores Mayoristas
y mayor venta realizada por los vendedores tipo mayorista.
Se dispone de los siguientes datos de varias vendedores: (nombre, tipo de vendedor, monto
venta) (Mary, 1, 150), (José, 1, 135), (Carlos, 2, 160), (Pedro, 2, 75)
Monto total de las ventas de los vendedores tipo mayorista: 285$
Monto mayor venta realizada por los vendedores tipo mayorista: 150$
 */

import Cl_vendedor from "./Cl_vendedor.js"
import Cl_ventas from "./Cl_ventas.js"

let vendedor = new Cl_vendedor("Mary", 1, 150)
let vendedor2 = new Cl_vendedor("José", 1, 135)
let vendedor3 = new Cl_vendedor("Carlos", 2, 160)
let vendedor4 = new Cl_vendedor("Pedro", 2, 75)

let ventas = new Cl_ventas()

ventas.procesar(vendedor)
ventas.procesar(vendedor2)
ventas.procesar(vendedor3)
ventas.procesar(vendedor4)

let salida = document.getElementById("salida")
salida.innerHTML = `
Monto total de las ventas de los vendedores tipo mayorista: ${ventas.totalvmayorista()}$
<br>Monto mayor venta realizada por los vendedores tipo mayorista: ${ventas.mayorventa()}$`