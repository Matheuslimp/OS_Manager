const moment = require('moment')

class Solicitacao {
    constructor(servico){
        this.id = this.geradorId
        this.servico = servico;
    }
    // Metodos da class Solicitacao
    geradorId(){
        // Gera um numero baseado na data que a solicitação foi criada, esse numero é utilizado como Indentificador da solicitação.
        return moment().format('YYYYMMDDHHmmss');
    }
    createrSolicitacao(){
        console.log('Solicitação criada:', this.id, this.servico)
    }
    imprimeNumber(){
        console.log(this.number)
    }
}

module.exports = Solicitacao