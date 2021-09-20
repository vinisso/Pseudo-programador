// RESOLUÇÃO 1



function segundoMaior(arr) {
    let indiceMaior = 0
    let segundoMaior 

    arr.forEach( (numero, indice) => {
        if (numero > arr[ indiceMaior ])
        indiceMaior = indice
    })
    
    arr.splice(indiceMaior, 1)
    segundoMaior = arr[0]

    arr.forEach( numero => { 
        if (numero > segundoMaior)
        segundoMaior = numero
    })
    return segundoMaior
}

console.log("\n\n RESOLUÇÃO 1 \n\n")

console.log(segundoMaior([1, 2, 3, 4, 5]))



// RESOLUÇÃO 2



function segundoMaior2(arr) {
    const MaiorNumero = Math.max(...arr)
    numeros = arr.filter( numero => numero != MaiorNumero)
    const segundoMaior = Math.max(...numeros)


    return segundoMaior
}

console.log("\n\n RESOLUÇÃO 2 \n\n")

console.log(segundoMaior2([1, 2, 3, 4, 5]))



// RESOLUÇÃO 3



function segundoMaior3(arr) {
    const numerosOrdenados = arr.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

return segundoMaior

}



console.log("\n\n RESOLUÇÃO 3 \n\n")

console.log(segundoMaior3([1, 2, 3, 4, 5]))