/**
 * Problema número 1.
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */
const data = require("./src/input-p1.json");
// console.log(data);console.log(data.hijos.length);

returnNoSons()
function returnNoSons(){
    //NOTA: I representa la palabra : INDEX
    for (let sedeI=0;sedeI<data.hijos.length;sedeI++){
        // console.log("muy buenas gente");
        console.log("muy buenas gente");  console.log(data.hijos[sedeI]);
        for (let cursoI=0;         cursoI<data.hijos[sedeI].hijos.length;          cursoI++){
           
            console.log("muy buenas gente2");  console.log(data.hijos[sedeI].hijos[cursoI].hijos);

            for (let seccionI=0; seccionI<data.hijos[sedeI].hijos[cursoI].hijos.length;              seccionI++){

                console.log("muy buenas gente3"); console.log(data.hijos[sedeI].hijos[cursoI].hijos[seccionI].hijos);

                // for (let ofertaI=0;   seccionI<data.hijos[sedeI].hijos[ofertaI].length     ;ofertaI++){
                  
                // }
            }
        }
    }
}
// console.log(data.hijos[0].hijos[0].hijos[0]);

