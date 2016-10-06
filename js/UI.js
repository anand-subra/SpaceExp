getStats();

function zoomIn(){
  scaleAmount += 0.05;
}

function zoomOut(){
scaleAmount -= 0.05;
}




function moveLeft(){
  translateX +=(25*scaleAmountR);
}

function moveUp(){
  translateY +=(25*scaleAmountR);
}

function moveRight(){
  translateX -=(25*scaleAmountR);
}

function moveDown(){
  translateY -=(25*scaleAmountR);
}


$(".glyphicon").click(function(){
  getStats();
})

function getStats(){
  scaleAmountR = parseFloat(Math.round(scaleAmount * 100) / 100).toFixed(2);
$('.zoomFactor').text(scaleAmountR);
$('.transX').text(translateX);
$('.transY').text(translateY);
}

function resetAll(){
  scaleAmount = 1.0;
  translateX = 0;
  translateY = 0;
}
