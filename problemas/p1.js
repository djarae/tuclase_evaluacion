/**
 * Problema número 1.
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */
const data = require("./src/input-p1.json");
const Nodo = require("./src/Nodo");

// console.log(returnNoSons());
finalNode1 = new Nodo("raiz", "Raíz",[])
finalNode2 = new Nodo("raiz", "Raíz",[])

cont1 = 0 
cont2 = 0 
cont3 = 0

console.log(noSonsRecursive(data)  );
console.log(parametizable(data,5)  );
console.log(countNodes(data,cont3));
// console.log(ejerc4());


function cl(elemento){
    console.log(elemento)
}

function printJson(obcjetD){
    for (let i=0;i<obcjetD.hijos.length;i++){
            cl(obcjetD.hijos[i])
            noSonsRecursivo(obcjetD.hijos[i])
    }
    return 0
}

//Recorremos de forma recursiva el arreglo para encontrar el valor solicitado
function noSonsRecursive(obcjetD){
    for (let i=0;i<obcjetD.hijos.length;i++){
      if  (obcjetD.hijos[i].hijos.length==0){
        //Almacenamos el hijo del nodo que no tiene hijos
        finalNode1[cont1] = obcjetD.hijos[i]
        cont1++
      }
        noSonsRecursive(obcjetD.hijos[i])
    }
    return  finalNode1
}

//Aqui se puede realizar recursivamente tambien
function parametizable(obcjetD,valor){
    for (let i=0;i<obcjetD.hijos.length;i++){
        if (obcjetD.hijos[i].length==valor){
            //Almacenamos el nodo que tiene la cantidad ingresada por parametro:
            finalNode2[cont2] = obcjetD
            cont2++
        }  
        parametizable(obcjetD.hijos[i])
    }
    return  finalNode2
}

function countNodes(obcjetD){
    for (let i=0;i<obcjetD.hijos.length;i++){
        cont3++
        countNodes(obcjetD.hijos[i])
    }
    return  cont3
}

// 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
//Colocaremos un if al ingresar a un nuevo arreglo con el fin de obtener exactamente la data que deseamos
function ejerc4(){
    let arrayFinal = []
        for (let sedeI=0;sedeI<data.hijos.length;sedeI++){
            for (let cursoI=0;         cursoI<data.hijos[sedeI].hijos.length;          cursoI++){
                if (data.hijos[sedeI].hijos[cursoI].nombre=="4 Medio"){
                    for (let seccionI=0; seccionI<data.hijos[sedeI].hijos[cursoI].hijos.length;              seccionI++){
                        if (data.hijos[sedeI].hijos[cursoI].hijos[seccionI].nombre=="A"){
                            for (let ofertaI=0; ofertaI<   data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length;              ofertaI++){
                                if (data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos[ofertaI].nombre=="Tecnología"){
                                    arrayFinal.push(data.hijos[sedeI].nombre);
                                }
                            }
                        }
                       
                    }
                }

               
            }
        }
        return   arrayFinal
}



