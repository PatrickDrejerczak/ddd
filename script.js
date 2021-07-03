canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 800;
document.body.appendChild(canvas);

canvas.style =
  "position:absolute; left: 50%; width: 600px; margin-left: 100px; top: 11%";

let score = 0;

const color = ["red", "blue", "green", "yellow", "orange"];

let y = 10;
let x = 250;
let dx = 0;
let dy = 2;

let rightPressed = false;
let leftPressed = false;

let bgReady,
  saturnReady,
  venusReady,
  earthReady,
  neptuneReady,
  marsReady,
  greenBoxReady,
  redBoxReady,
  yellowBoxReady,
  orangeBoxReady,
  blueBoxReady;
let bgImage,
  saturnImage,
  venusImage,
  earthImage,
  neptuneImage,
  marsImage,
  greenBoxImage,
  redBoxImage,
  yellowBoxImage,
  orangeBoxImage,
  blueBoxImage;

function loadImages() {
  bgImage = new Image();
  bgImage.onload = function () {
    bgReady = true;
  };
  bgImage.src = "space.png";

  redBoxImage = new Image();
  redBoxImage.onload = function () {
    redBoxReady = true;
  };
  redBoxImage.src = "redBox.png";

  blueBoxImage = new Image();
  blueBoxImage.onload = function () {
    blueBoxReady = true;
  };
  blueBoxImage.src = "blueBox.png";

  greenBoxImage = new Image();
  greenBoxImage.onload = function () {
    greenBoxReady = true;
  };
  greenBoxImage.src = "greenBox.png";

  orangeBoxImage = new Image();
  orangeBoxImage.onload = function () {
    orangeBoxReady = true;
  };
  orangeBoxImage.src = "orangeBox.png";

  yellowBoxImage = new Image();
  yellowBoxImage.onload = function () {
    yellowBoxReady = true;
  };
  yellowBoxImage.src = "yellowBox.png";

  saturnImage = new Image();
  saturnImage.onload = function () {
    saturnReady = true;
  };
  saturnImage.src = "saturn.png";

  venusImage = new Image();
  venusImage.onload = function () {
    venusReady = true;
  };
  venusImage.src = "venus.png";

  earthImage = new Image();
  earthImage.onload = function () {
    earthReady = true;
  };
  earthImage.src = "earth.png";

  neptuneImage = new Image();
  neptuneImage.onload = function () {
    neptuneReady = true;
  };
  neptuneImage.src = "neptune.png";

  marsImage = new Image();
  marsImage.onload = function () {
    marsReady = true;
  };
  marsImage.src = "mars.png";
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let yellowBoxX = 0;
let yellowBoxY = 680;

let redBoxX = 120;
let redBoxY = 680;

let blueBoxX = 240;
let blueBoxY = 680;

let greenBoxX = 360;
let greenBoxY = 680;

let orangeBoxX = 480;
let orangeBoxY = 680;

let saturnX = Math.floor(Math.random() * (canvas.width - 60));
let saturnY = -350;

let venusX = Math.floor(Math.random() * (canvas.width - 60));
let venusY = -50;

let earthX = Math.floor(Math.random() * (canvas.width - 60));
let earthY = -150;

let neptuneX = Math.floor(Math.random() * (canvas.width - 60));
let neptuneY = -250;

let marsX = Math.floor(Math.random() * (canvas.width - 60));
let marsY = -450;

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function drawScore() {
  ctx.font = "32px bold Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 8, 50);
}

function drawLives() {
  ctx.font = "32px bold Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Time left: " + count, canvas.width - 180, 50);
}

let update = function () {
  if (rightPressed) {
    orangeBoxX += 7;
    yellowBoxX += 7;
    redBoxX += 7;
    greenBoxX += 7;
    blueBoxX += 7;

    if (orangeBoxX >= canvas.width) {
      orangeBoxX = 0;
    }
    if (redBoxX > canvas.width) {
      redBoxX = 0;
    }
    if (blueBoxX > canvas.width) {
      blueBoxX = 0;
    }
    if (yellowBoxX > canvas.width) {
      yellowBoxX = 0;
    }
    if (greenBoxX > canvas.width) {
      greenBoxX = 0;
    }
  } else if (leftPressed) {
    orangeBoxX += -7;
    yellowBoxX += -7;
    redBoxX += -7;
    greenBoxX += -7;
    blueBoxX += -7;
  }

  if (orangeBoxX < 0) {
    orangeBoxX = canvas.width;
  }
  if (redBoxX < 0) {
    redBoxX = canvas.width;
  }
  if (blueBoxX < 0) {
    blueBoxX = canvas.width;
  }
  if (yellowBoxX < 0) {
    yellowBoxX = canvas.width;
  }
  if (greenBoxX < 0) {
    greenBoxX = canvas.width;
  }

  saturnY += 2.5;

  venusY += 2.5;

  earthY += 2.5;

  neptuneY += 2.5;

  marsY += 2.5;

  if (saturnY == canvas.height) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -50;
  } else if (venusY == canvas.height) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -150;
  } else if (earthY == canvas.height) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -250;
  } else if (neptuneY == canvas.height) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -350;
  } else if (marsY == canvas.height) {
    marsY = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -450;
  }

  if (
    yellowBoxX <= saturnX + 60 &&
    saturnX <= yellowBoxX + 120 &&
    yellowBoxY <= saturnY + 60 &&
    saturnY <= yellowBoxY + 120
  ) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -350;

    score = score + 10;
  } else if (
    yellowBoxX <= earthX + 60 &&
    earthX <= yellowBoxX + 120 &&
    yellowBoxY <= earthY + 60 &&
    earthY <= yellowBoxY + 120
  ) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -50;
  } else if (
    yellowBoxX <= neptuneX + 60 &&
    neptuneX <= yellowBoxX + 120 &&
    yellowBoxY <= neptuneY + 60 &&
    neptuneY <= yellowBoxY + 120
  ) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -50;
  } else if (
    yellowBoxX <= marsX + 60 &&
    marsX <= yellowBoxX + 120 &&
    yellowBoxY <= marsY + 60 &&
    marsY <= yellowBoxY + 120
  ) {
    marsX = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -50;
  } else if (
    yellowBoxX <= venusX + 60 &&
    venusX <= yellowBoxX + 120 &&
    yellowBoxY <= venusY + 60 &&
    venusY <= yellowBoxY + 120
  ) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -50;
  } else if (
    orangeBoxX <= venusX + 60 &&
    venusX <= orangeBoxX + 120 &&
    orangeBoxY <= venusY + 60 &&
    venusY <= orangeBoxY + 120
  ) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -50;
    // appleReady = false;
    score = score + 10;
  } else if (
    orangeBoxX <= earthX + 60 &&
    earthX <= orangeBoxX + 120 &&
    orangeBoxY <= earthY + 60 &&
    earthY <= orangeBoxY + 120
  ) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -50;
  } else if (
    orangeBoxX <= neptuneX + 60 &&
    neptuneX <= orangeBoxX + 120 &&
    orangeBoxY <= neptuneY + 60 &&
    neptuneY <= orangeBoxY + 120
  ) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -50;
  } else if (
    orangeBoxX <= marsX + 60 &&
    marsX <= orangeBoxX + 120 &&
    orangeBoxY <= marsY + 60 &&
    marsY <= orangeBoxY + 120
  ) {
    marsX = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -50;
  } else if (
    orangeBoxX <= saturnX + 60 &&
    saturnX <= orangeBoxX + 120 &&
    orangeBoxY <= saturnY + 60 &&
    saturnY <= orangeBoxY + 120
  ) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -50;
  } else if (
    greenBoxX <= earthX + 60 &&
    earthX <= greenBoxX + 120 &&
    greenBoxY <= earthY + 60 &&
    earthY <= greenBoxY + 120
  ) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -50;

    score = score + 10;
  } else if (
    greenBoxX <= venusX + 60 &&
    venusX <= greenBoxX + 120 &&
    greenBoxY <= venusY + 60 &&
    venusY <= greenBoxY + 120
  ) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -50;
  } else if (
    greenBoxX <= neptuneX + 60 &&
    neptuneX <= greenBoxX + 120 &&
    greenBoxY <= neptuneY + 60 &&
    neptuneY <= greenBoxY + 120
  ) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -50;
  } else if (
    greenBoxX <= marsX + 60 &&
    marsX <= greenBoxX + 120 &&
    greenBoxY <= marsY + 60 &&
    marsY <= greenBoxY + 120
  ) {
    marsX = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -50;
  } else if (
    greenBoxX <= saturnX + 60 &&
    saturnX <= greenBoxX + 120 &&
    greenBoxY <= saturnY + 60 &&
    saturnY <= greenBoxY + 120
  ) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -50;
  } else if (
    blueBoxX <= neptuneX + 60 &&
    neptuneX <= blueBoxX + 120 &&
    blueBoxY <= neptuneY + 60 &&
    neptuneY <= blueBoxY + 120
  ) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -50;
    // appleReady = false;
    score = score + 10;
  } else if (
    blueBoxX <= earthX + 60 &&
    earthX <= blueBoxX + 120 &&
    blueBoxY <= earthY + 60 &&
    earthY <= blueBoxY + 120
  ) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -50;
  } else if (
    blueBoxX <= venusX + 60 &&
    venusX <= orangeBoxX + 120 &&
    orangeBoxY <= venusY + 60 &&
    venusY <= orangeBoxY + 120
  ) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -50;
  } else if (
    blueBoxX <= marsX + 60 &&
    marsX <= blueBoxX + 120 &&
    blueBoxY <= marsY + 60 &&
    marsY <= blueBoxY + 120
  ) {
    marsX = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -50;
  } else if (
    blueBoxX <= saturnX + 60 &&
    saturnX <= blueBoxX + 120 &&
    blueBoxY <= saturnY + 60 &&
    saturnY <= blueBoxY + 120
  ) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -50;
  } else if (
    redBoxX <= marsX + 120 &&
    marsX <= redBoxX + 60 &&
    redBoxY <= marsY + 120 &&
    marsY <= redBoxY + 120
  ) {
    marsX = Math.floor(Math.random() * (canvas.width - 60));
    marsY = -50;
    // appleReady = false;
    score = score + 10;
  } else if (
    redBoxX <= earthX + 60 &&
    earthX <= redBoxX + 120 &&
    redBoxY <= earthY + 60 &&
    earthY <= redBoxY + 120
  ) {
    earthX = Math.floor(Math.random() * (canvas.width - 60));
    earthY = -50;
  } else if (
    redBoxX <= neptuneX + 60 &&
    neptuneX <= redBoxX + 120 &&
    redBoxY <= neptuneY + 60 &&
    neptuneY <= redBoxY + 120
  ) {
    neptuneX = Math.floor(Math.random() * (canvas.width - 60));
    neptuneY = -50;
  } else if (
    redBoxX <= venusX + 60 &&
    venusX <= redBoxX + 120 &&
    redBoxY <= venusY + 60 &&
    venusY <= redBoxY + 120
  ) {
    venusX = Math.floor(Math.random() * (canvas.width - 60));
    venusY = -50;
  } else if (
    redBoxX <= saturnX + 60 &&
    saturnX <= redBoxX + 120 &&
    redBoxY <= saturnY + 60 &&
    saturnY <= redBoxY + 120
  ) {
    saturnX = Math.floor(Math.random() * (canvas.width - 60));
    saturnY = -50;
  }
};

var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (redBoxReady) {
    ctx.drawImage(redBoxImage, redBoxX, redBoxY);
  }
  if (blueBoxReady) {
    ctx.drawImage(blueBoxImage, blueBoxX, blueBoxY);
  }
  if (greenBoxReady) {
    ctx.drawImage(greenBoxImage, greenBoxX, greenBoxY);
  }
  if (orangeBoxReady) {
    ctx.drawImage(orangeBoxImage, orangeBoxX, orangeBoxY);
  }
  if (yellowBoxReady) {
    ctx.drawImage(yellowBoxImage, yellowBoxX, yellowBoxY);
  }

  if (saturnReady) {
    ctx.drawImage(saturnImage, saturnX, saturnY);
  }
  if (venusReady) {
    ctx.drawImage(venusImage, venusX, venusY);
  }
  if (earthReady) {
    ctx.drawImage(earthImage, earthX, earthY);
  }
  if (neptuneReady) {
    ctx.drawImage(neptuneImage, neptuneX, neptuneY);
  }
  if (marsReady) {
    ctx.drawImage(marsImage, marsX, marsY);
  }

  drawLives();
  drawScore();

  if (finished == true) {
    ctx.font = "80px 'Press Start 2P', cursive, bold";
    ctx.fillText(`Game Over`, 95, 400);
  }
};

let count = 30;
let finished = false;
let counter = function () {
  count--;
  if (count <= 0) {
    clearInterval(counter);

    finished = true;
    count = 0;

    saturnReady = false;
    venusReady = false;
    marsReady = false;
    neptuneReady = false;
    earthReady = false;
    redBoxReady = false;
    blueBoxReady = false;
    greenBoxReady = false;
    orangeBoxReady = false;
    yellowBoxReady = false;
    yellowBoxX = -600;
    redBoxX = -600;
    greenBoxX = -600;
    orangeBoxX = -600;
    blueBoxX = -600;
  }
};

setInterval(counter, 1000);

var main = function () {
  update();
  render();

  requestAnimationFrame(main);
};

loadImages();

main();

function reset() {
  count = 30;
  score = 0;
  finished = false;
  saturnReady = true;
  venusReady = true;
  marsReady = true;
  neptuneReady = true;
  earthReady = true;
  redBoxReady = true;
  blueBoxReady = true;
  greenBoxReady = true;
  orangeBoxReady = true;
  yellowBoxReady = true;

  yellowBoxX = 0;
  yellowBoxY = 680;

  redBoxX = 120;
  redBoxY = 680;

  blueBoxX = 240;
  blueBoxY = 680;

  greenBoxX = 360;
  greenBoxY = 680;

  orangeBoxX = 480;
  orangeBoxY = 680;

  saturnX = Math.floor(Math.random() * (canvas.width - 60));
  saturnY = -350;

  venusX = Math.floor(Math.random() * (canvas.width - 60));
  venusY = -50;

  earthX = Math.floor(Math.random() * (canvas.width - 60));
  earthY = -150;

  neptuneX = Math.floor(Math.random() * (canvas.width - 60));
  neptuneY = -250;

  marsX = Math.floor(Math.random() * (canvas.width - 60));
  marsY = -450;
}
