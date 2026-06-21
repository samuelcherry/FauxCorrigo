const { app, BrowserWindow, screen } = require("electron");

function createWindow() {
  const width = 250;
  const height = 80;

  const { workAreaSize } = screen.getPrimaryDisplay();

  const win = new BrowserWindow({
    width,
    height,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
  });

  win.loadFile("index.html");

  win.setPosition(
    workAreaSize.width - width - 20,
    workAreaSize.height - height - 20,
  );
}

app.whenReady().then(createWindow);
