function multiplicar(xA, xB){
    let result = 0

    for (let i = 0 ; i < xB; i++)
    result += xA
        return result
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

//Outro método

function multiplicador(numero, mult){
    if (numero === 0 || mult === 0) return 0

    return mult === 1 ? numero : numero + multiplicador(numero, mult-1)
}

console.log(multiplicador(5, 5)) // Retorna 25
console.log(multiplicador(0, 7)) // Retorna 0




