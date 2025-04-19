let bulbElement = document.getElementById("bulb");

function bulbon() {
  bulbOn = true;
  bulbElement.src = "./images/on.jpg";
}

function bulbOff() {
  bulbOn = false;
  bulbElement.src = "./images/off.jpg";
}

function redTree() {
  if (bulbOn) {
    bulbElement.src = "./images/red.jpg";
  }
}

function greenTree() {
  if (bulbOn) {
    bulbElement.src = "./images/green.jpg";
  }
}

function blueTree() {
  if (bulbOn) {
    bulbElement.src = "./images/blue.jpg";
  }
}

function purpleTree() {
  if (bulbOn) {
    bulbElement.src = "./images/purple.jpg";
  }
}

function pinkTree() {
  if (bulbOn) {
    bulbElement.src = "./images/pink.jpg"; 
}
}

function orangeTree() {
  if (bulbOn) {
    bulbElement.src = "./images/orange.jpg";
  } 
}

