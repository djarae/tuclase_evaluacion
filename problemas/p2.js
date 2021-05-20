/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */


const Nodo = require("./src/Nodo");
const raiz = new Nodo("root", "Raíz",[]);
const neatCsv = require('neat-csv');

//Agregar a raiz toda la estructura solicitada.
//...
const fs = require('fs')

fs.readFile('./src/input-p2.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(await neatCsv(data))
})

console.log(raiz);