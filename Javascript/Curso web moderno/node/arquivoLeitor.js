const fs = require('fs')

const caminho = __dirname + '/arquivo.JSON'

// Sincrono... Só vai executar a próxima tarefa após terminar a anterior, estratégia ruim quando se mexe com arquivos pesados
//Tomar cuidado...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Para facilmente ler um arquivo .JSON, é muito simples. Basta fazer isso:
const config = require('./arquivo.json')

console.log(config.db)

//Note que esse ultimo console.log será lido antes do código acima dele, pois entra naquele caso dos assíncronos e síncronos.

//Leitura de pastas:

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})