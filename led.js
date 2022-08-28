//:::::Variables:::::
//Trabajar con tamano de modulo constante
const tModulo = 50;
let pitch;
let medidaPixelesModulo;
let tamanoTotalCmX;
let tamanoTotalCmY;
let tamanoPixelesTotal;
let tamanoPixelesX;
let tamanoPixelesY;
//cantidad de modulos
let modulos;
let modulosX;
let modulosY;
//:::::Funciones:::::
function borrarNan (notANum){
  console.log("antes de funcion directa"+notANum);
  notANum = 0;
  console.log("despues de funcion directa"+notANum);
  return notANum;
}
function crecerPantalla(){
  let crecer = parseInt (prompt("Cuantas veces quieres hacer crecer tu pantalla?"));
if (Number.isNaN(crecer)) {
  let convertirNot = borrarNan (crecer);
  crecer = convertirNot;
}
while (crecer==0){
  crecer = parseInt (prompt("Cuantos Pixeles tienen tus modulos en X de 50cmx50cm?")); 
  if (Number.isNaN(crecer)) {
    let convertirNot = borrarNan (crecer);
    crecer = convertirNot;
    }          
}
//Output data 2
for(let i=1;i<=crecer;i++){
  console.log(i);
  tamanoPixelesX = tamanoPixelesX *i;
  tamanoPixelesY = tamanoPixelesY *i;
  modulosX = modulosX *i;
  modulosY = modulosY *i;
  modulos = modulosX+modulosY;
  alert("tu pantalla ahora seria de "+modulosX+" modulos en X "+modulosY+" modulos en Y, necesitarias un total de "+modulos+" modulos, el total de pixeles en x, "+tamanoPixelesY+" cuando sea "+i+" veces mas grande");
}
}
//pedir data parte 1
medidaPixelesModulo = parseInt (prompt("Cuantos Pixeles tienen tus modulos en X de 50cmx50cm?"));
tamanoTotalCmX = parseInt (prompt("de que tamaño sera tu pantalla en cm en largo (Minimo 50cm)"));
tamanoTotalCmY = parseInt (prompt("de que tamaño sera tu pantalla en cm en Alto (Minimo 50cm)"));
if (Number.isNaN(tamanoTotalCmX)) {
    let convertirNot = borrarNan (tamanoTotalCmX);
    tamanoTotalCmX = convertirNot;
    console.log("tTotal despues de la funcion aplicada"+tamanoTotalCmX);
  }
console.log("tamanoTotalCmX despues de if"+tamanoTotalCmX);
while (tamanoTotalCmX==0){
  tamanoTotalCmX = parseInt (prompt("de que tamaño sera tu pantalla en cm en largo"));
  if (Number.isNaN(tamanoTotalCmX)) {
    let convertirNot = borrarNan (tamanoTotalCmX);
    tamanoTotalCmX = convertirNot;
    } 
  }
if (Number.isNaN(tamanoTotalCmY)) {
  let convertirNot = borrarNan (tamanoTotalCmY);
  tamanoTotalCmY = convertirNot;
  }
while (tamanoTotalCmY==0){
    tamanoTotalCmY = parseInt (prompt("de que tamaño sera tu pantalla en cm en Alto")); 
    if (Number.isNaN(tamanoTotalCmY)) {
      let convertirNot = borrarNan (tamanoTotalCmY);
      tamanoTotalCmY = convertirNot;
      }
      }
if (Number.isNaN(medidaPixelesModulo)) {
  let convertirNot = borrarNan (medidaPixelesModulo);
  medidaPixelesModulo= convertirNot;
        alert("necesito información");
      }
while (medidaPixelesModulo==0){
          medidaPixelesModulo = parseInt (prompt("Cuantos Pixeles tienen tus modulos en X de 50cmx50cm?")); 
          if (Number.isNaN(medidaPixelesModulo)) {
            let convertirNot = borrarNan (medidaPixelesModulo);
            medidaPixelesModulo = convertirNot;
            }          
        }  
//Output data
if(tamanoTotalCmX>=50 || tamanoTotalCmY>=50){
    modulosX = tamanoTotalCmX/tModulo;
    modulosY = tamanoTotalCmY/tModulo;
    modulos =  (tamanoTotalCmX/tModulo) + (tamanoTotalCmY/tModulo);
    alert("Necesitaras aproximadamente "+modulos+" modulos, "+modulosX+" modulos en X y "+modulosY+" modulos en Y");
} else if(tamanoTotalCmX<=49 || tamanoTotalCmY<=49 || tamanoTotalCmX>0 || tamanoTotalCmY>0){
    alert("Es muy pequeña la pantalla tus datos seran extraños");
    modulosX = tamanoTotalCmX/tModulo;
    modulosY = tamanoTotalCmY/tModulo;
    modulos =  (tamanoTotalCmX/tModulo) + (tamanoTotalCmY/tModulo);
}else{
    alert("Agrega un dato Valido")
}
if(medidaPixelesModulo>0){
    pitch = medidaPixelesModulo/tModulo;
    alert("tu pitch es "+pitch);
    tamanoPixelesX = modulosX*medidaPixelesModulo;
    alert("vas a manejar "+tamanoPixelesX+" pixeles en X");
    tamanoPixelesY = modulosY*medidaPixelesModulo;
    alert("vas a manejar "+tamanoPixelesY+" pixeles en Y");
    tamanoPixelesTotal = tamanoPixelesX*tamanoPixelesY;
    alert("el total de pixeles que debe sopoortar tu equipo es "+tamanoPixelesTotal);
}else {
    alert("no me has dado pixeles en X de tu modulo 50x50");
}
//preguntar si quiere cambiar 
let crecerSiONo = parseInt(prompt("Quieres hacer crecer tu pantalla?, 1.Si, 2.No"))
if (Number.isNaN(crecerSiONo)) {
  let convertirNot = borrarNan (crecerSiONo);
  crecerSiONo = convertirNot;
}
while (crecerSiONo==0){
  crecerSiONo = parseInt (prompt("Quieres hacer crecer tu pantalla?, 1.Si, 2.No")); 
  if (Number.isNaN(crecerSiONo)) {
    let convertirNot = borrarNan (crecerSiONo);
    crecerSiONo = convertirNot;
    }          
}
switch(crecerSiONo){
  case(1):
  crecerPantalla();
  case(2):
  alert("gracias por tu consulta");
}