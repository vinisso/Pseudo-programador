function par(numeros){
    let resultado = []

    for (i = 0; i < numeros.length; i += 2){
        const numeroPar = numeros[i]  % 2 === 0
        if (numeroPar){
            resultado.push(numeros[i])
        }
    }
    return resultado
}

    console.log(par([1, 2 ,3, 4, 5 , 6]))
    console.log(par([10,70,22,30,40]))

    // Resolução 2

    const pares = (numeros) => {
        return numeros.filter((numero, indice) => {
            const numeropar = numero % 2 === 0
            const indicepar = indice % 2 === 0
            return numeropar && indicepar
        })
    }

console.log('\n\n teste \n\n')
console.log(pares([1, 2 ,3, 4, 5 , 6]))
console.log(pares([10,70,22,30,40]))