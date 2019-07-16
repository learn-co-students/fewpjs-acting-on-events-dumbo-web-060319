// Your code here

var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
let game=document.getElementById("game");
let gameWidth= game.clientWidth;
let dodgetWidth=dodger.clientWidth



function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  console.log(left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var rightNumber =  dodger.style.left.replace("px", "");
  var right = parseInt(rightNumber, 10);

  if (right <360) {
    dodger.style.left = `${right+1}px`;
  } 
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
   else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
