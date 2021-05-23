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
posiArray = [0,0,0,0]

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
//Se puede aplicar recursividad para facilitarlo:
 function generateJson(){
    let lineas = csv.split('\n');
    makeJsonRecur(lineas,1,0,[],0,[0,0,0,0]);
 }

 function makeJsonRecur(lineas,rowCount,columnCount,auxSons,objId){
   while ( (rowCount<lineas.length)  ){
      let headers =  lineas[0].split(',')
      let rowData =  lineas[rowCount].split(',')  //LARGO ROWDATA SIEMPRE SERA 4,POR LO QUE SI EL COLUMNCOUNT LLEGA A 4 SE DEBE DETENER ESTO
      rowDataAnt =   lineas[rowCount-1].split(',')
      if (rowDataAnt[0]!=rowData[0]){
          if (rowCount+1<lineas.length){
            if (columnCount==0){seedSedes(rowData[columnCount],headers[columnCount],auxSons)}
            if (columnCount==1){seedCurso(rowData[columnCount],headers[columnCount],auxSons)}
            // if (columnCount < rowData.length){    //Solo debo ingresar si existe otra columna a la cual recorrer
            //     makeJsonRecur(lineas,rowCount,columnCount+1,auxSons,0)
            // }
            posiArray[columnCount]=objId+1
            objId++
        }
     }
     rowCount++
   }
   console.log(raiz)

 }

 function seedSedes(name,tipe,sons){
    let auxNode = new Nodo(name,tipe,sons);
    raiz.hijos[posiArray[0]]        = []
    raiz.hijos[posiArray[0]].nombre = auxNode.nombre
    raiz.hijos[posiArray[0]].tipo   = auxNode.tipo
    raiz.hijos[posiArray[0]].hijos  = []
 }

 function seedCurso(name,tipe,sons){
    // cl(posiArray[[0]])
    let auxNode = new Nodo(name,tipe,sons);
    raiz.hijos[i[0]].hijos[i[1]]        = []
    raiz.hijos[i[0]].hijos[i[1]].nombre = auxNode.nombre
    raiz.hijos[i[0]].hijos[i[1]].tipo   = auxNode.tipo
    raiz.hijos[i[0]].hijos[i[1]].hijos  = auxNode.hijos 
}


  function cl(e){
    console.log(e)
  }










