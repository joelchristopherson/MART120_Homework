let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound('audiofiles/Runoff.mp3');
}

/*function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}*/

function Setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
}

function mouseClicked() {
  if (mySound.isPlaying()){
    mySound.pause()
  } else
  mySound.play()
}