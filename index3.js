const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 30;

canvas.addEventListener('mousemove', (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;
  const quadrant = getQuadrant(x, y);
  drawCircle(x, y);
  if (quadrant === 1) {
    drawCircle(canvas.width - x, y);
    drawCircle(x, canvas.height - y);
    drawCircle(canvas.width - x, canvas.height - y);
  } else if (quadrant === 2) {
    drawCircle(x, y);
    drawCircle(canvas.width - x, y);
    drawCircle(canvas.width - x, canvas.height - y);
  } else if (quadrant === 3) {
    drawCircle(x, y);
    drawCircle(canvas.width - x, y);
    drawCircle(x, canvas.height - y);
  } else if (quadrant === 4) {
    drawCircle(x, y);
    drawCircle(canvas.width - x, y);
    drawCircle(x, canvas.height - y);
    drawCircle(canvas.width - x, canvas.height - y);
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
}

function getQuadrant(x, y) {
  if (x < centerX && y < centerY) {
    return 1;
  } else if (x >= centerX && y < centerY) {
    return 2;
  } else if (x < centerX && y >= centerY) {
    return 3;
  } else {
    return 4;
  }
}
