const { Menu } = require('electron')
const openSettingsWindow = require('./windows/settings.cjs')

const nativeMenus = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        click() {
          openSettingsWindow()
        }
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(nativeMenus)
Menu.setApplicationMenu(menu)