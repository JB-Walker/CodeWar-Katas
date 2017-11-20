// Tribute
window.onload = function start() {
    const  containerCount = 14, imgsPerContainer = 7;
    slideShow();
  }
  
// Infinite Loops to continuously change pictures
function slideShow () {
  const id, imgNum, imgNumPath;
  for (let container = 0; container < containerCount; container++) {
    window.setInterval(function () {
    id = 'container-' + container;
    imgNum = Math.floor(Math.random() * imgsPerContainer) + 
    imgNum = currentCycle * containerCount + container;
    imgNumPath = 'img/' + imgNum + '.jpg';
    document.getElementById(id).setAttribute('src', imgNumPath);
    }, 3000); // repeat forever, changing image name every 3 seconds
  }
}
