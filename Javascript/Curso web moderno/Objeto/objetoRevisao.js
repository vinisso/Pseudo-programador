// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}
carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'AV Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)