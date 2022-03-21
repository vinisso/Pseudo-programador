
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Sincrono... Tome cuidado com a estratégia usada para manipulação de dados pelo fs, mal utilizado fará muita demora no processamento desses dados. Estudar métodos sincronos e assíncronos

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//Assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}}`) 
})

const config = require('./arquivo.json') //Sempre especificar a extensão do arquivo quando for diferente de JavaScript, pois senão especificado, o node procurará somente arquivos .js, retornando um erro
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// __dirname é uma constante presente em todos os arquivos do node, em todos os módulos do node. Ele representa o diretório atual. Assim como o './'
