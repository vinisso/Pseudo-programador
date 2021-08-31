//Resolução 1

function calcMedia(arrNums){
    let qntdNums = arrNums.length
    let total = 0

    for (let numero of arrNums)
    total += numero

    return total / qntdNums
}

console.log("\n\n RESOLUÇÃO 1 \n\n")

console.log(calcMedia([0, 10]))

//Resolução 2 

function calcMedia2(arrNums){
    let qntdNums = arrNums.length

    const somaTotal = arrNums.reduce( (numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / qntdNums
}

console.log("\n\n RESOLUÇÃO 2 \n\n")

console.log(calcMedia2([1, 2, 3, 4, 5]))
