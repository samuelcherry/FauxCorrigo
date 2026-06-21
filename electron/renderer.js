async function loadTickets() {
  try {
    const res = await fetch("http://localhost:3000/tickets");
    const data = await res.json();

    document.getElementById("low").textContent = data.low;
    document.getElementById("medium").textContent = data.medium;
    document.getElementById("high").textContent = data.high;
    document.getElementById("urgent").textContent = data.urgent;
  } catch (err) {
    console.error("Failed to fetch tickets", err);
  }
}

loadTickets();
setInterval(loadTickets, 2000);
