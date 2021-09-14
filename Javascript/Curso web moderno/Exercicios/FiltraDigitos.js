// RESOLUÇÃO 1

function filtro(arr, digitos) {
    let resultado = []

    for( numeros of arr ) {
        let qtdNums = String(numeros).length

        if ( qtdNums === digitos )
        resultado.push(numeros)
    }
    return resultado        
}


console.log("\n\n RESOLUÇÃO 1 \n\n")
console.log(filtro([11, 12, 445, 3425, 13, 4534645, 14], 2))



// RESOLUÇÃO 2

function filtro2(arr, digitos) {
    return arr.filter(numero => {
        const qntNums = String(numero).length

        return qntNums === digitos
    })
}


console.log("\n\n RESOLUÇÃO 2 \n\n")
console.log(filtro2([15, 16, 445, 3425, 17, 4534645, 18], 2))