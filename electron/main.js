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
    focusable: false,
  });

  win.loadFile("index.html");

  win.once("ready-to-show", () => {
    win.show();
    win.setAlwaysOnTop(true, "screen-saver");
    win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  });

  win.setPosition(
    workAreaSize.width - width - 20,
    workAreaSize.height - height - 20,
  );
}

app.whenReady().then(createWindow);
