const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'João',
        nota: 6.5
    }, {
        nome: 'Rebecca',
        nota: 5.0
    }]
}]

const getNA = aluno => aluno.nota
const getNT = turma => turma.alunos.map(getNA)

const notas1 = escola.map(getNT)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNT)
console.log(notas2)