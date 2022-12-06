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

// Recurso do ES8
// Objetivo de simplicar o uso de promises...
// Ele vai deixar esse método mais assíncrono com uma pegada mais Sincrona.
// Você precisa marcar sua função com a palavra "async", a palavra "await" só funciona dentro de uma função marcada com "async".
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // Retorna um objeto AsynFunction e é em cima dele que chamamos o ".then()"

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))