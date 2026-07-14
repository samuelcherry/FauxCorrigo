const boxes = {
  low: document.querySelector(".low"),
  medium: document.querySelector(".medium"),
  high: document.querySelector(".high"),
  urgent: document.querySelector(".urgent"),
};

async function update() {
  const response = await fetch("http://localhost:3000/tickets");
  const data = await response.json();

  boxes.low.textContent = data.low;
  boxes.medium.textContent = data.medium;
  boxes.high.textContent = data.high;
  boxes.urgent.textContent = data.urgent;
}

update();
setInterval(update, 5000);
