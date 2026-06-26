const {contextBridge, ipcRenderer} = require('electron');

console.log('2. preload.js carregado com sucesso!');

contextBridge.exposeInMainWorld('api', {

    login : function (email, password) {
        console.log('3. Chamando a função login do preload.js com os dados:', email, password);

        ipcRenderer.invoke('login', email, password);
    }
})