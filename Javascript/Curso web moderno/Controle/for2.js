const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`Índice ${i}:`, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Júlia',
    idade: 29,
    peso: 65
}
console.log(' ')

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}
console.log(atributo)