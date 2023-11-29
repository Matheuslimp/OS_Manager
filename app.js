const Solicitacao = require('./src/modulos/Solicitacao');
const express = require('express');

// Configurações do servidor;
const app = express();
const PORT = 3000;
// Configuração de express para renderiazar EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// primeira instacia da classe Solicitacoes


// Rotas para renderização de pastas
app.get('/index', (req, res) => {
    res.render('index');

});




app.listen(PORT, () => { console.log(`Aplicação iniciada em http://localhost:${PORT} ou 127.0.0.1:${PORT}`);});