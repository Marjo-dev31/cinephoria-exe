// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
    console.error("Unexpected error: ", error);
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
        }
    });
    win.loadFile(path.join(__dirname, '../dist/cinephoria-exe/browser/index.html'));
}
// App Lifecycle
app.whenReady().then(createWindow);
