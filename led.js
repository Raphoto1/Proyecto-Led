//:::::Variables:::::
//Trabajar con tamano de modulo constante
const tModulo = 50;
//variable para pitch
let pitch;
//pixeles por modulo X y Y
let mPixeles;
//tamano total de la pantalla en X en cm
let tTotalX;
//tamano total de la pantalla en Y en cm
let tTotalY;
//cantidad de pixeles en total
let tPixelesT;
//cantidad de pixeles en x
let tPixelesX;
//cantidad de pixeles en y
let tPixelesY;
//cantidad de modulos
let modulos;
let modulosX;
let modulosY;
//pedir data parte 1
mPixeles = parseInt (prompt("Cuantos Pixeles tienen tus modulos en X de 50cmx50cm?"));
tTotalX = parseInt (prompt("de que tamaño sera tu pantalla en cm en largo (Minimo 50cm)"));
tTotalY = parseInt (prompt("de que tamaño sera tu pantalla en cm en Alto (Minimo 50cm)"));

//Obligar a dar data y convertir los NaN en 0 para usar if y ahora function
//tamano x
function borrarNan (Nan){
    console.log("antes de"+Nan);
    Nan = 0;
    console.log("despues de"+Nan);
    alert("necesito información en funcion");
    return resultado;
}
if (Number.isNaN(tTotalX)) {
    console.log("antes de"+tTotalX);
    tTotalX = 0;
    console.log("despues de"+tTotalX);
    alert("necesito información");
  }
  while (tTotalX==0){
tTotalX = parseInt (prompt("de que tamaño sera tu pantalla en cm en largo")); 
    if (Number.isNaN(tTotalX)) {
    tTotalX = 0;
    }
  }
//tamano y
if (Number.isNaN(tTotalY)) {
    console.log("antes de"+tTotalY);
    tTotalY = 0;
    console.log("despues de"+tTotalY);
    alert("necesito información");
  }
while (tTotalY==0){
    tTotalY = parseInt (prompt("de que tamaño sera tu pantalla en cm en Alto")); 
        if (Number.isNaN(tTotalY)) {
        tTotalY = 0;
        }
      }
//pixeles
if (Number.isNaN(mPixeles)) {
        console.log("antes de"+mPixeles);
        mPixeles = 0;
        console.log("despues de"+mPixeles);
        alert("necesito información");
      }
while (mPixeles==0 || mPixeles==NaN){
          mPixeles = parseInt (prompt("Cuantos Pixeles tienen tus modulos en X de 50cmx50cm?")); 
          if (Number.isNaN(mPixeles)) {
            mPixeles = 0;
          }          
        }  

//cuantos modulos vas  anecesitar
if(tTotalX>=50 || tTotalY>=50){
    modulosX = tTotalX/tModulo;
    modulosY = tTotalY/tModulo;
    modulos =  (tTotalX/tModulo) + (tTotalY/tModulo);
    alert("Necesitaras aproximadamente "+modulos+" modulos, "+modulosX+" modulos en X y "+modulosY+" modulos en Y");
} else if(tTotalX<=49 || tTotalY<=49 || tTotalX>0 || tTotalY>0){
    alert("Es muy pequeña la pantalla tus datos seran extraños");
    modulosX = tTotalX/tModulo;
    modulosY = tTotalY/tModulo;
    modulos =  (tTotalX/tModulo) + (tTotalY/tModulo);
}else{
    alert("Agrega un dato Valido")
}

//calcular cantidad de pixeles por el pitch(densidad de pixeles) con tamaño de modulo constante
//calcular el total de pixeles en X
//calcular el total de pixeles en Y
//calcular el total de pixeles en Total
if(mPixeles>0){
    pitch = mPixeles/tModulo;
    alert("tu pitch es "+pitch);
    tPixelesX = modulosX*mPixeles;
    alert("vas a manejar "+tPixelesX+" pixeles en X");
    tPixelesY = modulosY*mPixeles;
    alert("vas a manejar "+tPixelesY+" pixeles en Y");
    tPixelesT = tPixelesX*tPixelesY;
    alert("el total de pixeles que debe sopoortar tu equipo es "+tPixelesT);
}else {
    alert("no me has dado pixeles en X de tu modulo 50x50");
}

//preguntar cuantas veces quiere hacer crecer su pantalla
let crecer = parseInt (prompt("Cuantas veces quieres hacer crecer tu pantalla en X?"));
for(let i=1;i<=crecer;i++){
  console.log(i);
  tPixelesX = tPixelesX *i;
  alert("tu pantalla ahora seria de "+tPixelesX+" pixeles en x cuando sea "+i+" veces mas grande");
}