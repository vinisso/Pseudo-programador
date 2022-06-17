const os = require('os') //Bug no windows, somente o replace('\n', '') bastaria em outro SO. Outro metodo era usar o replace('\r\n', ''), porém só funcionaria em sistemas windows sua aplicação. Ai nao

const anonimo = process.argv.indexOf('-a') !== -1

//console.log(anonimo)

if (anonimo) {
    process.stdout.write(`Fala Anônimo!!${os.EOL}`)
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, "")

    process.stdout.write(`Fala, ${nome}!!${os.EOL}`)
    process.exit()
    })
}