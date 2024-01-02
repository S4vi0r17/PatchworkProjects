const button = document.querySelector("#button");
const icon = document.querySelector("#button > span");
const audio = document.querySelector("audio");
const contenedorAudio = document.querySelector(".contenedor-audio");
const Container = document.querySelector(".Container");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
        icon.textContent = "pause";
    } else {
        audio.pause();
        icon.textContent = "play_arrow";
    }
    button.classList.add("fade");
    contenedorAudio.classList.add("hidde");
    Container.classList.remove("hidde");
});

// Cards:
let video = document.getElementById("videoG");

const pictures = document.querySelectorAll('.Picture');
var previousTouch = undefined;

function updateElementPosition(element, event) {
  var movementX, movementY;

  if (event.type === 'touchmove') {
    const touch = event.touches[0];
    movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
    movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
    console.log('touch', { movementX: movementX, newX: touch.clientX, oldX: previousTouch && previousTouch.clientX });
    previousTouch = touch;
  } else {
    movementX = event.movementX;
    movementY = event.movementY;
  }

  const elementY = parseInt(element.style.top || 0) + movementY;
  const elementX = parseInt(element.style.left || 0) + movementX;

  element.style.top = elementY + "px";
  element.style.left = elementX + "px";
}

function startDrag(element, event) {

  const updateFunction = (event) => updateElementPosition(element, event);
  const stopFunction = () => stopDrag({ update: updateFunction, stop: stopFunction });
  document.addEventListener("mousemove", updateFunction);
  document.addEventListener("touchmove", updateFunction);
  document.addEventListener("mouseup", stopFunction);
  document.addEventListener("touchend", stopFunction);

}

function stopDrag(functions) {
  previousTouch = undefined;
  document.removeEventListener("mousemove", functions.update);
  document.removeEventListener("touchmove", functions.update);
  document.removeEventListener("mouseup", functions.stop);
  document.removeEventListener("touchend", functions.stop);
}


// Rotar elementos aleatoriamente
pictures.forEach(picture => {
  const range = 200;
  const randomX = Math.random() * (range * 2) - range;
  const randomY = Math.random() * (range * 2) - range;
  const randomRotate = Math.random() * (range / 2) - range / 4;
  const startFunction = (event) => startDrag(picture, event);
  picture.style.top = `${randomY}px`;
  picture.style.left = `${randomX}px`;
  picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
  picture.addEventListener("mousedown", startFunction);
  picture.addEventListener("touchstart", startFunction);
});