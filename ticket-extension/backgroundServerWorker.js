async function refresh() {
  const response = await fetch("http://localhost:3000/tickets");
  const tickets = await response.json();

  updateIcon(tickets);

  chrome.runtime.sendMessage({
    type: "tickets",
    tickets,
  });
}

refresh();
setInterval(refresh, 5000);
