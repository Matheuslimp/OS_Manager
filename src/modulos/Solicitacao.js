const moment = require('moment');

class Solicitacao {
    constructor(solicitante, resumo, contato) {
        this.id = this.geradorId();
        this.solicitante = solicitante;
        this.resumo = resumo;
        this.contato = contato;
        this.data = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    // Método para gerar o ID
    geradorId() {
        return moment().format('YYYYMMDDHHmmss');
    }

    createrSolicitacao() {
        console.log('Solicitação criada:', this.id, this.resumo, this.contato);
    }

    imprimeId() {
        console.log(this.id);
    }
}

module.exports = Solicitacao;
