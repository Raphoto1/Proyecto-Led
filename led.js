//Trabajar con tamano de modulo constante
const screenModuleSize = 50;
class screen {
  constructor(id,pixelSizeX,screenSizeX,screenSizeY,module){
    this.id = id;
    this.pixelSizeX = pixelSizeX;
    this.screenSizeX = screenSizeX;
    this.screenSizeY = screenSizeY;
    this.module = screenModuleSize;
  }
}
screenGroup = [];

function eraseNan(notANum) {
  console.log("antes de funcion directa" + notANum);
  notANum = 0;
  console.log("despues de funcion directa" + notANum);
  return notANum;
}
let screenNumber = 0;
screenNumber = parseInt(prompt("cuantas pantallas ncesitas configurar?"))
if (Number.isNaN(screenNumber)){
  let convertirNan = eraseNan(screenNumber);
  screenNumber = convertirNan;
}
while(screenNumber==0){
  screenNumber = parseInt(prompt("cuantas pantallas ncesitas configurar?"));
  if (Number.isNaN(screenNumber)){
    let convertirNan = eraseNan(screenNumber);
    screenNumber = convertirNan;
  }
}

for(i=1;i<=screenNumber;i++){
  screenNumber = screenNumber++;
  pixelSizeX = parseInt(prompt('cuantos pixeles en X tienen tus modulos de la pantalla numero '+i));
  screenSizeX = parseInt(prompt('que tamaño tiene en cm en X tu pantalla numero'+i));
  screenSizeY = parseInt(prompt('que tamaño tiene en cm en Y tu pantalla numero'+i));
  const createScreen = new screen(i,pixelSizeX,screenSizeX,screenSizeY);
  screenGroup.push(createScreen);
} 

console.log(screenGroup.lenght);
alert('has creado un total de '+screenGroup.lenght);

