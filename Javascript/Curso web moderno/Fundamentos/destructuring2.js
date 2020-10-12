const [a] = [10] //para desestruturar um array fique esperto com a declaração da variavel.
//ela tem que estar entre colchetes.
console.log(a)

const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [,, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota)