// RESOLUÇÃO 1 

function menorNum(numeros) {
    let menor = numeros[0]

    for ( let num in numeros ) {
        if ( numeros[num] < menor)
        menor = numeros[num]
    }
    return menor
}

console.log(" \n\n RESOLUÇÃO 1 \n\n ")

console.log(menorNum([10, 5, 35, 65]))

// RESOLUÇÃO 2 

function menorNum2(numeros) {
    return numeros.reduce(( anterior, atual ) => anterior < atual ? anterior : atual)
}


console.log(" \n\n RESOLUÇÃO 2 \n\n" )

console.log(menorNum2([10, 5, 35, 65]))

// RESOLUÇÃO 3

function menorNum3(numeros) {
    return Math.min(...numeros)
}


console.log(" \n\n RESOLUÇÃO 3 \n\n ")

console.log(menorNum3([10, 5, 35, 65]))