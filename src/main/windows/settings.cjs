const { BrowserWindow } = require('electron')
let settingsWindow = null
const openSettingsWindow = () => {
  if (settingsWindow) {
    settingsWindow.focus()
    return
  }

  settingsWindow = new BrowserWindow({
    height: 640,
    resizable: false,
    width: 480,
    title: '',
    minimizable: false,
    fullscreenable: false
  })

  settingsWindow.loadURL('http://localhost:3000/settings')

  settingsWindow.on('closed', function() {
    settingsWindow = null
  })
}

module.exports = openSettingsWindow
