// RESOLUÇÃO 1

function pesquisar(inicio, palavras){
    
let resultado = []

    for ( let palavra of palavras )
        if ( palavra.includes(inicio) )
        resultado.push(palavra)
    return resultado 

}

console.log('\n\n RESOLUÇÃO 1 \n\n')
console.log(pesquisar("pro", ["uau", "programação", "prorrogação", "polímero"]))


// RESOLUÇÃO 2

function pesquisar2(inicio, palavras){
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log('\n\n RESOLUÇÃO 2 \n\n')
console.log(pesquisar2("pro", ["uau", "programação", "prorrogação", "polímero"]))