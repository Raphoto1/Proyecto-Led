//Trabajar con tamano de modulo constante
const screenModuleSize = 50;
class Screen {
  constructor(id,pixelSizeX,screenSizeX,screenSizeY,moduleNumberX,moduleNumberY,module){
    this.id = id;
    this.pixelSizeX = pixelSizeX;
    this.screenSizeX = screenSizeX;
    this.screenSizeY = screenSizeY;
    this.moduleNumberX = moduleNumberX;
    this.moduleNumberY = moduleNumberY;
    this.module = screenModuleSize;
  }
}
screenGroup = [];

function eraseNan(notANum) {
  notANum = 0;
  return notANum;
}

let screenNumber = 0;
screenNumber = parseInt(prompt("cuantas pantallas necesitas configurar?"))
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
  screenSizeX = parseInt(prompt('que tamaño tiene en cm en X tu pantalla numero '+i));
  screenSizeY = parseInt(prompt('que tamaño tiene en cm en Y tu pantalla numero '+i));
  moduleNumberX = screenSizeX/screenModuleSize;
  moduleNumberY = screenSizeY/screenModuleSize;
  const createScreen = new Screen(i,pixelSizeX,screenSizeX,screenSizeY,moduleNumberX,moduleNumberY);
  screenGroup.push(createScreen);
} 
alert('Has creado un total de '+screenGroup.length+' pantallas');

screenGroup.sort((a,b)=> a.screenSizeX - b.screenSizeX);

let verifyData = parseInt(prompt('quieres verificar la informacion ingresada?(de la pantalla de menor a mayor tamaño en X) 1.Si 2.No'))
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
    screenGroup.forEach(e => {
      alert(`tu pantalla numero ${e.id} tendra un tamaño de ${e.screenSizeX} cm en X, y ${e.screenSizeY} cm en Y, necesitaras un total de ${e.moduleNumberX*e.moduleNumberY} modulos`);
      alert(`tu pantalla numero ${e.id} tendra un tamaño en pixeles en X de ${e.moduleNumberX*e.pixelSizeX} y en Y de ${e.moduleNumberY*e.pixelSizeX}`);
    });
  case 2:
    alert("gracias por tu consulta, ahora te daremos el total de modulos y el tamaño en pixeles de tu montaje completo");
}

let modulesStageTotal = 0;
for (let i=0;i<screenGroup.length;i++){
  modulesStageTotal = modulesStageTotal + screenGroup[i].moduleNumberX*screenGroup[i].moduleNumberY;
}
alert("Necesitaras un total de "+modulesStageTotal+" modulos");

let pixelsTotalX = 0;
let pixelsTotalY = 0;
for (let i=0;i<screenGroup.length;i++){
  pixelsTotalX = pixelsTotalX + screenGroup[i].moduleNumberX*screenGroup[i].pixelSizeX;
  pixelsTotalY = pixelsTotalY + screenGroup[i].moduleNumberY*screenGroup[i].pixelSizeX;
}
alert("El total de pixeles de tu montaje en X sera "+pixelsTotalX);
alert("El total de pixeles de tu montaje en Y sera "+pixelsTotalY);

const highestPixelX = screenGroup.sort((a,b)=> b.pixelSizeX-a.pixelSizeX);
  alert(`tu diseñador agradecera que le informes que la cantidad de pixeles de los espacios vacios seran de ${highestPixelX[0].pixelSizeX*2} por cada metro, recuerda que la mejor manera de calcular estos vacios es con la pantalla con mayor cantidad de pixeles que es la pantalla numero ${highestPixelX[0].id}`)