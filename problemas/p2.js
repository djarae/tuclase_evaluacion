/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */

const Nodo = require("./src/Nodo");
const raiz = new Nodo("root", "Raíz",[]);

//Usamos la misma data del archivo csv
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

let sedesArray = [];
let lineas = csv.split('\n');
let cabecera = lineas[0].split(',')

//PD ROWDATE 0 SIEMPRE SERA UNA SEDE, 1 SIEMPRE SERA UNA CLASE Y ASI
let contSedes = 0;

let cursoArray = [];
let contCurso = 0;

let seccionArray = [];
let contSeccion = 0;

let ofertaArray = [];
let contOferta = 0;

for (let i=1;i<lineas.length;i++){
    let rowData = lineas[i].split(',')
//sede  
if ((i+1) < lineas.length){
        rowDataNext = lineas[i+1].split(',') //Con esto revisamos si la siguiente columna esta repetida!!
}
    if (rowDataNext[0]==rowData[0]){
        //cursos:
                if (rowDataNext[1]==rowData[1]){
                        //Secciones
                        if (rowDataNext[2]==rowData[2]){
                                //oferta
                                    if (rowDataNext[3]==rowData[3]){
                                    }else{
                                        seedOferta(contOferta,rowData[3],"oferta",[])
                                    }
                        }else{
                            seedOferta(contOferta,rowData[3],"oferta",[])
                            seedSeccion(contSeccion,rowData[2],"seccion",ofertaArray)
                            initOferta()
                        }
                }else{
                    seedSeccion(contCurso,rowData[2],"seccion",ofertaArray)
                    seedCursos(contCurso,rowData[1],"curso",seccionArray)
                    initSeccion()
                }
        
        }else{
            seedCursos(contCurso,rowData[1],"curso",seccionArray)
            raiz.hijos[contSedes] =   seedSedes(contSedes,rowData[0],"sede",cursoArray)
            initCurso()
        }
}



retornarHijos(raiz)
// console.log(raiz.hijos[0].hijos)  //funciona!!
function retornarHijos(array){
    // console.log(array)
    for (let i=0;i<array.hijos.length;i++){
        console.log(array.hijos[i]);
        console.log("end2222")
        for (let j=0;j<array.hijos[i].hijos[j].length;j++){
            console.log(array.hijos[i].hijos[j]);
            console.log("endd")
            // for (let k=0;k<array[i].hijos[j].hijos.length;k++){
            //     console.log(array[i].hijos[j].hijos[k]);
            // }
        }
    }
}

//Funciones:
function seedSedes(cont,rowData,tipo,arrayAux){
    sedesArray[contSedes]={ 
        "nombre": "",
        "tipo"  : "",
        "hijos" : [{}]
    }
    sedesArray[cont][ "nombre" ] = rowData;
    sedesArray[cont][ "tipo" ] = tipo;
    sedesArray[cont][ "hijos" ] = (arrayAux);
  
    contSedes = contSedes + 1;

    return   sedesArray[cont]
}

function initCurso(){
    contCurso  = 0 
    cursoArray = []
}
function seedCursos(cont,rowData,tipo,arrayAux){
    cursoArray[contCurso]={ 
        "nombre": "",
        "tipo"  : "",
        "hijos" : [{}]
    }
    cursoArray[cont]={}
    cursoArray[cont][ "nombre" ] = rowData;
    cursoArray[cont][ "tipo" ] = tipo
    cursoArray[cont][ "hijos" ] = arrayAux
    contCurso = contCurso + 1;
}

function initSeccion(){
    contSeccion  = 0 
    seccionArray = []
}
function seedSeccion(cont,rowData,tipo,arrayAux){
    seccionArray[contSeccion]={ 
        "nombre": "",
        "tipo"  : "",
        "hijos" : [{}]
    }
    seccionArray[cont]={}
    seccionArray[cont][ "nombre" ] = rowData;
    seccionArray[cont][ "tipo" ] = tipo;
    seccionArray[cont][ "hijos" ] = arrayAux;
    contSeccion = contSeccion + 1;
}

function initOferta(){
    contOferta  = 0 
    ofertaArray = []
}

function seedOferta(cont,rowData,tipo,arrayAux){
    ofertaArray[contOferta]={ 
        "nombre": "",
        "tipo"  : "",
        "hijos" : [{}]
    }
    ofertaArray[cont]={}
    ofertaArray[cont][ "nombre" ] =  rowData;
    ofertaArray[cont][ "tipo" ]   =  tipo
    ofertaArray[cont][ "hijos" ]  =  [];
    contOferta = contOferta + 1;
}
