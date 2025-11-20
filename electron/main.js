// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
  console.error('Unexpected error: ', error);
});

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname + '/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

//   win.loadFile(path.join(__dirname, '../dist/cinephoria-exe/browser/index.html'));
 await win.loadURL('http://localhost:4200');
}
// App Lifecycle
app.whenReady().then(createWindow);

