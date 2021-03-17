function array(elemento){
    const primeiro = 0
    const ultimo = elemento.length - 1
    const PrimeiroElemento = elemento[primeiro]
    const UltimoElemento = elemento[ultimo]

    return [PrimeiroElemento, UltimoElemento]//.join('')
}

console.log(array(['Free fire', 'é muito bom', ' é um jogo ruim' ]))

//Outra resolução

function primeiroeultimo(element){
    const primeiroelement = element.shift()
    const ultimoelement = element.pop()
    return [primeiroelement, ultimoelement]
}

console.log(primeiroeultimo(['Jujutsu Kaisen', 'Kimetsu no yaiba', 'Shingeki no kyojin']))

// Outro método

function receberPrimeiro([first, ...resto]){
    const last = resto.pop()
    return [first, last]
}

console.log(receberPrimeiro(['Amendoim', 'Amora', 'Beterraba','Banana']))
