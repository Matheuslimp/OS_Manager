class Solicitacao {
    constructor(number,servico){
    //atributos de uma Solicitacao
        this.number = number;
        this.servico = servico;
    }
    // Metodos da class Solicitacao
    createrSolicitacao(){

    }
    imprimeNumber(){
        console.log(this.number)
    }
}

module.exports = Solicitacao