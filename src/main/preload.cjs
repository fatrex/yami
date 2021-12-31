const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'messages', {
    load: async (account) => await ipcRenderer.invoke('load-messages', account),
    open: async (data) => await ipcRenderer.invoke('open-message', data)
  }
)

contextBridge.exposeInMainWorld(
  'folders', {
    load: async (account) => await ipcRenderer.invoke('load-folders', account)
  }
)

contextBridge.exposeInMainWorld(
  'accounts', {
    load: async () => await ipcRenderer.invoke('load-accounts'),
    save: async (data) => await ipcRenderer.invoke('save-account', data)
  }
)