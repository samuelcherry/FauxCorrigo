function updateIcon(tickets) {
  let color;
  let textColor = "white";
  let count;

  if (tickets.urgent > 0) {
    color = "#d32f2f";
    count = tickets.urgent;
  } else if (tickets.high > 0) {
    color = "#f57c00";
    count = tickets.high;
  } else if (tickets.medium > 0) {
    color = "#fbc02d";
    textColor = "black"; // Better contrast on yellow
    count = tickets.medium;
  } else {
    color = "#43a047";
    count = tickets.low;
  }

  const imageData = createIcon(color, textColor, String(count));

  chrome.action.setIcon({
    imageData,
  });
}

function createIcon(color, textColor, text) {
  const SIZE = 128;
  const CENTER = SIZE / 2;
  const RADIUS = CENTER - 2;

  const canvas = new OffscreenCanvas(128, 128);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 128, 128);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(CENTER, CENTER, RADIUS, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.fillStyle = textColor;
  ctx.font = "bold 100px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 64, 70);

  return ctx.getImageData(0, 0, 128, 128);
}
