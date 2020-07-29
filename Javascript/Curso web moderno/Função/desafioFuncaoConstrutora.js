function Pessoa (nome) {
    //this.nome = nome é facultativo, porém caso você ainda queira ter acesso ao nome, use o this.nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
