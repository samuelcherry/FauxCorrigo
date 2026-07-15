importScripts("icon.js");

async function refresh() {
  const response = await fetch("http://localhost:3000/tickets");
  const tickets = await response.json();

  updateIcon(tickets);

  chrome.runtime.sendMessage(
    {
      type: "tickets",
      tickets,
    },
    () => void chrome.runtime.lastError,
  );
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true,
  });
});

refresh();
setInterval(refresh, 5000);
