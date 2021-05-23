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

console.log(noSonsRecursivo(data)  );
// console.log(parametizable(data,5)  );
// console.log(contabilization());
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
function noSonsRecursivo(obcjetD){
    for (let i=0;i<obcjetD.hijos.length;i++){
      if  (obcjetD.hijos[i].hijos.length==0){
        finalNode1[cont1] = obcjetD.hijos[i]
        cont1++
      }else{
        noSonsRecursivo(obcjetD.hijos[i])
      }
    }
    return  finalNode1
}


function parametizable(obcjetD,valor){
    for (let i=0;i<obcjetD.hijos.length;i++){
      if  (obcjetD.hijos[i].hijos.length==0){
      }else{
        if (obcjetD.hijos[i].length==0){
            finalNode2[cont2] = obcjetD.hijos[i]
            cont2++
        }  
        parametizable(obcjetD.hijos[i])
      }
    }
    return  finalNode2
}





function returnEspecific(esp){
    //usaremos un codigo similar al anterior,solo que reemplazaremos la variable por el "0"
    let arrayFinal = []
    for (let sedeI=0;sedeI<data.hijos.length;sedeI++){
        if (data.hijos[sedeI].hijos.length==esp){
            arrayFinal.push(data.hijos[sedeI]);
        }
        for (let cursoI=0;         cursoI<data.hijos[sedeI].hijos.length; cursoI++){
            if (data.hijos[sedeI].hijos[cursoI].hijos.length==esp){
                arrayFinal.push(data.hijos[sedeI].hijos[cursoI]);
            }
            for (let seccionI=0; seccionI<data.hijos[sedeI].hijos[cursoI].hijos.length;seccionI++){
                if ( data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length==esp){
                    arrayFinal.push(data.hijos[sedeI].hijos[cursoI].hijos[seccionI]);
                }
                for (let ofertaI=0; ofertaI<   data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length; ofertaI++){
                    if (data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos[ofertaI].hijos.length==esp){
                        arrayFinal.push(data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos[ofertaI]);
                    }
                }
            }
        }
    }
    return arrayFinal
}




function  contabilization(){
    //Por medio de un contador iremos sumando cada vez quqe ingresemos a un nuevo objeto
    let count = 0;
    for (let sedeI=0;sedeI<data.hijos.length;sedeI++){
        count=count+1;
        for (let cursoI=0; cursoI<data.hijos[sedeI].hijos.length; cursoI++){
            count=count+1;
            for (let seccionI=0; seccionI<data.hijos[sedeI].hijos[cursoI].hijos.length; seccionI++){
                count=count+1;
                for (let ofertaI=0; ofertaI<   data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length;  ofertaI++){
                   count=count+1;
                }
            }
        }
    }
    return   count
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



