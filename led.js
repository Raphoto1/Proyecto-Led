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
  let changeNan = eraseNan(screenNumber);
  screenNumber = changeNan;
}
while(screenNumber==0){
  screenNumber = parseInt(prompt("cuantas pantallas necesitas configurar?"));
  if (Number.isNaN(screenNumber)){
    let changeNan = eraseNan(screenNumber);
    screenNumber = changeNan;
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
alert('Has creado un total de '+screenGroup.length+' pantallas');

screenGroup.sort((a,b)=> a.screenSizeX - b.screenSizeX);
const holdData = JSON.stringify(screenGroup);
let verifyData = parseInt(prompt('quieres verificar la informacion ingresada? 1.Si 2.No'))
if (Number.isNaN(verifyData)) {
  let changeNan = eraseNan(verifyData);
  verifyData = changeNan;
}
while (verifyData == 0) {
  verifyData = parseInt(
    prompt("quieres verificar la informacion ingresada?(de la pantalla de menor a mayor tamaño en X) 1.Si 2.No"));
  if (Number.isNaN(verifyData)) {
    let changeNan = borrarNan(verifyData);
    verifyData = changeNan;
  }
}
switch (verifyData) {
  case 1:
    alert(holdData);
  case 2:
    alert("gracias por tu consulta, mas funciones vendran en el futuro");
}

