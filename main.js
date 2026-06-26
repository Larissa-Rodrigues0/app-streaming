const { app, BrowserWindow, ipcMain } = require("electron")
const database = require('./db')

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    })

    janela.loadFile("public/login.html")

    janela.webContents.openDevTools()
}

app.whenReady().then(criarJanela)

ipcMain.handle('login', async function(event, email, password){
    console.log('4. Cheguei no ipcMain:', email, password);

    const [ rows ] = await database.query("SELECT * FROM users WHERE email = ? AND password = ? AND is_active = 1", [email, password]);
    console.log('5. Usuário encontrado:', rows[0]);

})