 "use strict";

 let balls = document.querySelectorAll(".balls img");
 for (let ball of balls) {
   ball.addEventListener("mousedown", dragItem);
 }

  function dragItem(event) {
    event.preventDefault();
  } 
//   let item = this;
//   document.body.prepend(this);
//   item.style.position = "absolute";
//   item.style.zindex = "99999";
//   console.log(item.getBoundingClientRect());
  
//   let belowElement = null;
//   let shiftX = event.getBoundingClientRect().width/2;
//   let shiftY = event.getBoundingClientRect().height/2;
  
//   moveAt(event);
//   document.addEventListener("mousemove", moveAt);
  
//   function moveAt(event) {
//     item.style.top = (event.clientY - shiftY) + "px";
//     item.style.left = (event.clientX - shiftX) + "px";
//     item.hidden = true;
//     belowElement = document.elementFromPoint(event.clientX, event.clientY);
//     item.hidden = false;
//   }
  
//   item.addEventListener("mouseup", function handler(){
//     document.removeEventListener("mousemove", moveAt);
//     item.removeEventListener("mouseup", handler);
//     item.style.zindex = "100";
//   });
  
// }

let santaClaus = document.querySelector(".santa-claus");
startDrive();
function startDrive() {
  driveToEnd()
    .then(() => teleportCar())
    .then(() => driveToStart())
    .then(() => startDrive());
}

function driveToEnd() {
  return new Promise((res, rej) => {
    santaClaus.style.transition = "all 13s linear";
    santaClaus.style.left = "100%";
    santaClaus.ontransitionend = () => {
      res();
      santaClaus.ontransitionend = null;
    };
  });
}

function teleportCar() {
  return new Promise((res, rej) => {
    santaClaus.style.transition = "none";
    santaClaus.style.left = (0 - santaClaus.getBoundingClientRect().width) + "px";
    setTimeout(() => {
      res();
    }, 30);
  });
}

function driveToStart() {
  return new Promise((res, rej) => {
    santaClaus.style.transition = "all 2s linear";
    santaClaus.style.left = 0;
    santaClaus.ontransitionend = () => {
      res();
      santaClaus.ontransitionend = null;
    };
  });
}



