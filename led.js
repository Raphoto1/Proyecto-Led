//Trabajar con tamano de modulo constante
const screenModuleSize = 50;
//constructores y array contenedor
class Screen {
  constructor(id,pixelSizeX,screenSizeX,screenSizeY,moduleNumberX,moduleNumberY,module){
    this.id = id;
    this.pixelSizeX = pixelSizeX;
    this.screenSizeX = screenSizeX;
    this.screenSizeY = screenSizeY;
    this.moduleNumberX = moduleNumberX;
    this.moduleNumberY = moduleNumberY;
    this.module = screenModuleSize;
    const singleScreen = `
    <form id="pantalla${this.id}">  
          <label for="pixel${this.id}">Pixeles de tu pantalla ${this.id}</label>
          <input type="number" id="pixelX${this.id}" name="pixelSizeX${this.id}">
          <label for="screenSizeX${this.id}">Tamaño de tu pantalla ${this.id} en X</label>
          <input type="number" id="screenSizeX${this.id}" name="sizeScreenX${this.id}">
          <label>Tamaño de tu pantalla ${this.id} en Y</label>
          <input type="number" id="screenSizeY${this.id}" name="sizeScreenY${this.id}">
    </form>
    `
    chkScreens.innerHTML += singleScreen;
  }
}
let screenGroup = [];
let screenNumber = 0;
//traer DOM
const formScreen = document.getElementById(`formScreen`);
const numberScreensInput = document.getElementById(`numberScreen`);
const btnAcceptScreens = document.getElementById(`acceptScreens`);
const chkScreens = document.getElementById(`checkScreens`);
const resultsContainer = document.getElementById(`contenedorResultados`);
//Trabajar DOM
//Funciones
function captureScreens(e){
  e.preventDefault();
  screenNumber = parseInt(numberScreensInput.value);
  const showScreenNum = document.createElement(`h2`);
  showScreenNum.innerText = `Vamos a configurar ${screenNumber} pantallas`;
  const createCalcButton = document.createElement(`button`);
  createCalcButton.id = `calcular`;
  createCalcButton.innerText = `calcular`;
  chkScreens.append(showScreenNum);
  createScreensArray();
  chkScreens.append(createCalcButton);
  formScreen.remove();
  buttonInteractiveCreation();
}
function createScreensArray(){
for(i=1;i<=screenNumber;i++){
  screenNumber = screenNumber++;
  pixelSizeX = document.getElementById(`pixelX${i}`);
  screenSizeX = document.getElementById(`screenSizeX${i}`);
  screenSizeY = document.getElementById(`screenSizeY${i}`);
  moduleNumberX = 0;
  moduleNumberY = 0;
  const createScreen = new Screen(i,pixelSizeX,screenSizeX,screenSizeY,moduleNumberX,moduleNumberY);
  screenGroup.push(createScreen);
}
}
function buttonInteractiveCreation(){
  const calcData = document.getElementById(`calcular`);
  calcData.addEventListener("click", captureData);
}
function calcScreenmodules(a,b){
  let answer = a/b;
  return answer;
}
function captureData(e){
  e.preventDefault();
  screenGroup.forEach(element => {
    pSX = document.getElementById("pixelX"+element.id);
    element.pixelSizeX = parseInt(pSX.value);
    sSX = document.getElementById("screenSizeX"+element.id);
    element.screenSizeX = parseInt(sSX.value);
    sSY = document.getElementById("screenSizeY"+element.id);
    element.screenSizeY = parseInt(sSY.value);
    element.moduleNumberX = calcScreenmodules(element.screenSizeX,element.module);
    element.moduleNumberY = calcScreenmodules(element.screenSizeY,element.module);
    console.log(element);
    displayData(element.id,element.moduleNumberX,element.moduleNumberY,
      element.screenSizeX,element.screenSizeY,element.pixelSizeX);
  });
chkScreens.remove();
}
function displayData(id,moduleNumberX,moduleNumberY,screenSizeX,screenSizeY,pixelSizeX){
  let totalmodules = moduleNumberX*moduleNumberY;
  let totalPixelsX = moduleNumberX*pixelSizeX;
  let totalPixelsY = moduleNumberY*pixelSizeX;

  const singleScreenData = `
  <h2>Tu pantalla ${id} de ${screenSizeX} cm a lo largo y ${screenSizeY} cm a lo alto</h2>
  <ul>
  <li>
      Necesitara un total de ${totalmodules} Modulos
  </li>
  <li>
      necesitara ${moduleNumberX} Modulos en X
  </li>
  <li>
      necesitara ${moduleNumberY} Modulos en Y
  </li>
  <li>
      Tendra ${totalPixelsX} pixeles en X
  </li>
  <li>
      Tendra ${totalPixelsY} pixeles en Y
  </li>
  <li>
      tu sistema debera soportar ${totalPixelsY*totalPixelsX} pixeles
  </li>
</ul>
    `
    resultsContainer.innerHTML += singleScreenData;
}
//Eventos
formScreen.addEventListener("submit", captureScreens);


