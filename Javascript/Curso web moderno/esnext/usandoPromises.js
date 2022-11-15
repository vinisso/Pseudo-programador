// com promise...

// arquivo focado em mostrar como era feito o método antigo, antes do promisse ser criado, e como ele veio para melhorar.

const console = require('console');
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {  // o promises leva esses dois parametros tratar das chamadas, "Resolve" e "Reject"
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {   // Usaremos o Try() para tentar colocar a string retornada em JSON.
                    resolve(JSON.parse(resultado))
                }   catch(e) {   // Caso dê errado, catamos o erro com o "Catch", passando um parametro para receber o erro. Em seguida, chamamdos o Reject passando o mesmo parametro que agora carrega consigo o erro.
                      reject(e)
                }
            })
        })
    })
}

let nomes = []

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})
// Essas situações de encadeamento de callbacks, são chamadas de callback hell. É uma confusão de chamada de callbacks, uma dentro da outra, não usual. Para isso que foi criado o promises.

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Pode receber diversas promisses. Quando todas as promissse forem atendidas ou rejeitadas, dai então serão chamados os métodos .then()
    .then(turmas => [].concat(...turmas)) // Aqui teremos apenas um Array que interna nele os outros arrays
    .then(x => console.log(x))