// RESOLUÇÃO 1

function vogais(frase){
let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )

    return frase
}    


console.log("\n\n RESOLUÇÃO 1 \n\n")
console.log(vogais('queria tomar uma coquinha.'))
console.log("\n\n Esse método é meio zoado, pois ele só substitui a vogal uma única vez, como pode ver o que aconteceu com o caractere 'a'")


// RESOLULÇAO 2


function vogais2(frase) {
    return frase.replace(/[aeiou]/ig, '')

} 


console.log("\n\n RESOLUÇÃO 2 \n\n")
console.log(vogais2('queria tomar uma coquinha.'))