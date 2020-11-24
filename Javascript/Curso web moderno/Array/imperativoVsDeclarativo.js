const alunos = [
    { nome: 'joão', nota: 7.9 },
    { nome: 'Maria', nota: 9.2}
]

//Imperativa

let total1 = 0
for (let i = 0; i < alunos.length ; i++) {
   total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo

const getNota = aluno => aluno.nota
const soma = (total, valorAtual) => total + valorAtual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)