window.onload = function start() {
  const containerCount = 14; // Number of child pics displayed simultaneously
  const imgsPerContainer = 7; // Number of unique images available to each container
  slideShow(containerCount, imgsPerContainer);
  showText();
}

// Each pic container continuously & ramdonly selects a new pic to be displayed from a
// set of assigned pictures. The pic changes should not not all happen at once.
function slideShow (containerCount, imgsPerContainer) {
  for (let container = 0; container < containerCount; container++) {
    window.setInterval(function () {
      const id = `container-${container}`;
      const imgNum = Math.floor(Math.random() * imgsPerContainer) + container * imgsPerContainer;
      const imgNumPath = `img/${imgNum}.jpg`;
      document.getElementById(id).setAttribute('src', imgNumPath);
    }, 1000 + container * 333); // repeat forever, changing image name every 2-4 seconds
  }
}

// Replace the childhood title pics with the promotion pics
function showText () {
  window.setTimeout(function () {
    document.getElementById('titleRightPic').style.visibility = 'hidden';
    document.getElementById('titleRightText').style.display = 'block';
    document.getElementById('titleLeftPic').style.visibility = 'hidden';        
    document.getElementById('titleLeftText').style.display = 'block';  
  }, 3500);
}

