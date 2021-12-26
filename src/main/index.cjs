const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
require('./menu.cjs')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  // win.loadFile('index.html')
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

ipcMain.handle('load-messages', async (_, account) => {
  const { retrieveMessages } = require('./imap.cjs')
  const { getAccount } = require('./db.cjs')
  const dbAccount = await getAccount(account.user)
  const messages = await retrieveMessages(dbAccount, {})
  return messages
})

ipcMain.handle('load-folders', async (_, account) => {
  const { retrieveFolders } = require('./imap.cjs')
  const { getAccount } = require('./db.cjs')
  const dbAccount = await getAccount(account.user)
  const { folders } = await retrieveFolders(dbAccount).catch(error => console.error(error))
  return folders
})

ipcMain.handle('load-accounts', async () => {
  const { getAccounts } = require('./db.cjs')
  const accounts = await getAccounts()
  return accounts.map(a => {
    return {
      _id: a._id,
      user: a.user
    }
  })
})

ipcMain.handle('save-account', async (_, data) => {
  console.log(data)
  const { saveAccount } = require('./db.cjs')
  return saveAccount(data)
})