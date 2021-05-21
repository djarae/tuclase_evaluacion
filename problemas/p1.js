/**
 * Problema número 1.
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */
const data = require("./src/input-p1.json");

console.log(returnNoSons());
console.log(returnEspecific(4));
console.log(contabilization());
console.log(ejerc4());

function returnNoSons(){
    
    //NOTA: I representa la palabra : INDEX
    //Recorremos cada arreglo y buscamos el que tenga un largo "0" de arreglos
    let arrayFinal = []
    for (let sedeI=0;sedeI<data.hijos.length;sedeI++){
        if (data.hijos[sedeI].hijos.length==0){
            arrayFinal.push(data.hijos[sedeI]);
        }
        for (let cursoI=0;         cursoI<data.hijos[sedeI].hijos.length;          cursoI++){
            if (data.hijos[sedeI].hijos[cursoI].hijos.length==0){
                arrayFinal.push(data.hijos[sedeI].hijos[cursoI]);
            }
            for (let seccionI=0; seccionI<data.hijos[sedeI].hijos[cursoI].hijos.length;              seccionI++){
                if ( data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length==0){
                    arrayFinal.push(data.hijos[sedeI].hijos[cursoI].hijos[seccionI]);
                }
                for (let ofertaI=0; ofertaI<   data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos.length;              ofertaI++){
                    if (data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos[ofertaI].hijos.length==0){
                        arrayFinal.push(data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos[ofertaI]);
                    }
                }
            }
        }
    }
    return arrayFinal
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



