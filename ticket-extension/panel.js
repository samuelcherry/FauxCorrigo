const ids = {
  low: document.getElementById("low"),
  medium: document.getElementById("medium"),
  high: document.getElementById("high"),
  urgent: document.getElementById("urgent"),
};

async function updateTickets() {
  try {
    const response = await fetch("http://localhost:3000/tickets");
    const data = await response.json();

    ids.low.textContent = data.low;
    ids.medium.textContent = data.medium;
    ids.high.textContent = data.high;
    ids.urgent.textContent = data.urgent;
  } catch (err) {
    console.error(err);
  }
}

updateTickets();
setInterval(updateTickets, 3000);
