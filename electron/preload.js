const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getAllIncidents: () => ipcRenderer.invoke('getAllIncidents')
});
