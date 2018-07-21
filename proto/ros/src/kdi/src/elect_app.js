const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
var zerorpc = require('zerorpc');

let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

client.invoke("sum", 10, 30, (err, ret, more) => {
  console.log(ret);
});

app.on('ready', () => {
  let window = new BrowserWindow({width: 800, height: 600})
  window.loadURL(url)
})