// RESOLUÇÃO 1

function conta(frase, caractere) {
    
let contador = 0

    for ( let i = 0 ; i < frase.length; i++ ) {
        if ( frase.charAt(i) === caractere )
        contador++
    }

return contador

}


console.log("\n\n RESOLUÇÃO 1 \n\n")

console.log(conta('eu to muito triste', 'e'))


// RESOLUÇÃO 2

function conta2(frase, caractere) {
    return [...frase].filter(ctr => ctr === caractere).length
}

console.log(conta2('eu to muito triste', 'e'))