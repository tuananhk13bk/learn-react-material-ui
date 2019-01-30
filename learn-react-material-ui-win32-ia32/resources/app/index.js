const electron = require('electron')

const { app, BrowserWindow } = electron
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow()
  // mainWindow.loadUrl(`file://${__dirname}/dist/index.html`)
  // mainWindow.loadURL('https://google.com')
  // mainWindow.loadURL('http://localhost:4000')
  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
})
