// sem promise...

// arquivo focado em mostrar como era feito o método antigo, antes do promisse ser criado, e como ele veio para melhorar.

const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B ${b.nome}`))
        //console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C ${c.nome}`))
            console.log(nomes)
        })
    })
})

// Essas situações de encadeamento de callbacks, são chamadas de callback hell. É uma confusão de chamada de callbacks, uma dentro da outra, não usual. Para isso que foi criado o promises.