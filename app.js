const Solicitacao = require('./src/modulos/Solicitacao'); // ainda não utilizado!
const express = require('express');
const bodyParser = require('body-parser');

// Configurações do servidor;
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(bodyParser.urlencoded({ extended: true }));



// Rotas para rederização de paginas
app.get('/', (req, res) => {
    res.render('index');

});

// Processamento de requisições
app.post('/enviar_servico', (req, res) => {
    const solicitante = req.body.solicitante;
    const resumo = req.body.resumo;
    const contato = req.body.contato;

    const novaSolicitacao = new Solicitacao(solicitante,resumo,contato)

    novaSolicitacao.createrSolicitacao()

    /* console.log('solicitante:', solicitante);
    console.log('E-mail:', contato);
    console.log('E-mail:', resumo); */
});


app.listen(PORT, () => { console.log(`Aplicação iniciada em http://localhost:${PORT} ou 127.0.0.1:${PORT}`);});