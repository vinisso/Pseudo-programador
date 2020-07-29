const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // FalarDePessoa está recebendo o 'this' do objeto pessoa e o aplicando na função pessoa.falar
falarDePessoa()

const falar2 = pessoa.falar
falar2()