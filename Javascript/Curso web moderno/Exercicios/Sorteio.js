function sorteio(numEscolhido) {
    let min = 1
    let max = 10

    let random = Math.floor(Math.random() * (max - min + 1) + min)

    return random === numEscolhido ? 
    `Boa, acertou! o número é ${random}` 
    :
    `VIsh, foi dessa vez não amigão... era ${random}, não ${numEscolhido}`
}

console.log(sorteio(7))