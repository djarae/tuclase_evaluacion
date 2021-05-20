/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */

const Nodo = require("./src/Nodo");
const raiz = new Nodo("root", "Raíz",[]);


let  csv = `Sede,Curso,Seccion,Oferta
Las Condes,Pre-Kinder,A,Playgroup
Las Condes,Pre-Kinder,A,Inglés
Las Condes,1 Básico,A,Lenguaje
Las Condes,1 Básico,A,Matematicas
Las Condes,1 Básico,B,Lenguaje
Las Condes,1 Básico,B,Matematicas
Las Condes,2 Básico,A,Inglés
Las Condes,2 Básico,A,Matematicas
Las Condes,2 Básico,B,Inglés
Las Condes,2 Básico,B,Lenguaje
Vitacura,5 Básico,A,Inglés
Vitacura,5 Básico,A,Lenguaje
Vitacura,5 Básico,A,Matematicas
Vitacura,5 Básico,A,Tecnología
Vitacura,5 Básico,B,Química
Vitacura,5 Básico,B,Lenguaje
Vitacura,5 Básico,B,Matematicas
Vitacura,5 Básico,B,Tecnología
Providencia,1 Medio,A,Historia
Providencia,1 Medio,A,Inglés
Providencia,1 Medio,A,Biología
Providencia,2 Medio,B,Inglés
Providencia,2 Medio,B,Historia
Providencia,2 Medio,B,Biología
Providencia,2 Medio,B,Fisica
Providencia,4 Medio,C,Matematicas
Providencia,4 Medio,C,Lenguaje
Providencia,4 Medio,C,Historia
Santiago,5 Básico,A,Matematicas
Santiago,5 Básico,A,Tecnología
Santiago,5 Básico,B,Química
Santiago,2 Medio,B,Biología
Santiago,2 Medio,B,Fisica
Santiago,4 Medio,C,Matematicas
Santiago,1 Básico,B,Matematicas
Santiago,2 Básico,A,Inglés
Santiago,2 Básico,A,Matematicas
Santiago,2 Básico,B,Lenguaje
Ñuñoa,5 Básico,A,Inglés
Ñuñoa,5 Básico,A,Lenguaje
Ñuñoa,5 Básico,A,Matematicas
Ñuñoa,5 Básico,A,Tecnología
Ñuñoa,1 Básico,A,Matematicas
Ñuñoa,1 Básico,B,Lenguaje
Ñuñoa,2 Medio,B,Historia
Ñuñoa,2 Medio,B,Biología
Ñuñoa,2 Básico,B,Lenguaje
Ñuñoa,5 Básico,A,Inglés
Ñuñoa,1 Básico,A,Matematicas
  `

let finalArray = [];
let lineas = csv.split('\n');
let cabecera = lineas[0].split(',')

// console.log("lineas");console.log(lineas)
//PD ROWDATE 0 SIEMPRE SERA UNA SEDE, 1 SIEMPRE SERA UNA CLASE Y ASI
// console.log("cabecera");console.log(cabecera)

let sedeAnt = "";
let contSedes = 0;
let cursoArray = [];
let cursoAnt = "";
let contCurso = 0;
for (let i=1;i<lineas.length;i++){
    let rowData = lineas[i].split(',')
      
    // console.log("rowdata:::");console.log(rowData[0])
    // console.log("rowdata:::");console.log(rowData[1])
    // console.log("rowdata:::");console.log(rowData[2])
    // console.log("rowdata:::");console.log(rowData[3])
 //sede  
   if ((i+1) < lineas.length){
    rowDataNext = lineas[i+1].split(',')
   }
 
    if (rowDataNext[0]==rowData[0]){
        //cursos:
            if (cursoAnt==rowData[1]){
            }else{
                cursoArray[contCurso]={}
                cursoArray[contCurso][ "nombre" ] = rowData[1];
                cursoArray[contCurso][ "tipo" ] = "curso";
                contCurso = contCurso + 1;
            }
            cursoAnt = rowData[1];
    }else{
        finalArray[contSedes]={ 
        "nombre": "",
        "tipo"  : "",
        "hijos" : [{}]
    }
        finalArray[contSedes][ "nombre" ] = rowData[0];
        finalArray[contSedes][ "tipo" ] = "sede";
        finalArray[contSedes][ "hijos" ] = (cursoArray);
        // console.log( finalArray)
        // console.log( finalArray[0].hijos)
        // console.log(cursoArray)
        retornarHijos(finalArray)
        
       
        contCurso  = 0 ;
        cursoArray = []
        contSedes = contSedes + 1;
      
        // console.log( retornarHijos(finalArray));
    }
}


function retornarHijos(array){
    for (let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}







// console.log(raiz);