/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */
//imports:
const Nodo = require("./src/Nodo");
const raiz = new Nodo("raiz", "Raíz",[]);

//vars
contSede = 0;
contSedeAnt = 0;

contCurso = 0;
contCursoAnt = 0;

contSeccion = 0;
contSeccionAnt = 0 ;

//Poblamos el archivo csv:
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

  generateJson();
//vars


//Functions

 function generateJson(){
    let lineas = csv.split('\n');
    for (let i=1;i<lineas.length;i++){
        // console.log(lineas)
        let rowData = lineas[i].split(',')
          rowDataAnt = lineas[i-1].split(',') 
        if  (i+1<lineas.length){
          rowDataNext = lineas[i+1].split(',') 
        }
        if (rowDataAnt[0]!=rowData[0]){
          if (i+1<lineas.length){
              let auxSede = new Nodo(rowData[0], "Sede",[]);
              raiz.hijos[contSede] = []
              raiz.hijos[contSede].nombre = auxSede.nombre
              raiz.hijos[contSede].tipo   = auxSede.tipo
              raiz.hijos[contSede].hijos  = auxSede.hijos
              contSedeAnt=contSede
              contSede++
              contCurso=0
          }
        }
        else
        {
            //Como antes no se repiten las sedes procedemos a evaluar el curso si es que se repite
            if (rowDataAnt[1]!=rowData[1]){ 
              if (i+1<lineas.length){
                let auxCurso = new Nodo(rowData[1], "Curso",[]);
                raiz.hijos[contSedeAnt].hijos[contCurso]  = []
                raiz.hijos[contSedeAnt].hijos[contCurso].nombre = auxCurso.nombre
                raiz.hijos[contSedeAnt].hijos[contCurso].tipo   = auxCurso.tipo
                raiz.hijos[contSedeAnt].hijos[contCurso].hijos  = auxCurso.hijos 
                contCurso++
                contCursoAnt=contCurso
                contSeccion=0
              }
            }
            else
            {
                  if (rowDataAnt[2]!=rowData[2]){ 
                    if (i+1<lineas.length){
                      let auxSeccion = new Nodo(rowData[2], "Seccion",[]);
                      console.log("se cae")
                      // raiz.hijos[contSedeAnt].hijos[contCursoAnt].hijos[contSeccion]   = []
                      // raiz.hijos[contSedeAnt].hijos[contCurso].hijos[contSeccion].nombre = auxSeccion.nombre
                      // raiz.hijos[contSedeAnt].hijos[contCurso].hijos[contSeccion].tipo   = auxSeccion.tipo
                      // raiz.hijos[contSedeAnt].hijos[contCurso].hijos[contSeccion].hijos  = auxSeccion.hijos 
                      contSeccion++
                    }

                }
            }
        }
    }
    // console.log(raiz)
    console.log(raiz.hijos[0].hijos)   

 }











