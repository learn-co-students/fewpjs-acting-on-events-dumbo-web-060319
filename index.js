// Your code here
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 30}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 30);

   if (left > 0) {
    dodger.style.left = `${left + 30}px`;
  }
}

function runEvent(e){
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  };
  
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}


document.addEventListener("keydown", runEvent);







