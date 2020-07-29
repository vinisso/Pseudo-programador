// pessoa -> 123 -> {...}
// Por ser uma constante, pode haver duvidas, como: 'se é um constante, por que eu altero seus valores?'
//A resposta é que você pode alterar os valores do bloco dela, não da própria variável.
const pessoa = {nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //torna o objeto como um todo em uma constante. bloqueando qualquer tentativa de alterações

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)