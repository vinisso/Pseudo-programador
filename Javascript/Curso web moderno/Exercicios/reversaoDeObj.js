// RESOLUÇÃO 1

function reverseObj(obj) {
    const objInvertido = {}

    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0,
              valor = 1

        objInvertido [ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objInvertido
}


console.log("\n\n RESOLUÇÃO 1 \n\n")
console.log(reverseObj({ a: 1, b: 2, c: 3}))


// RESOLUÇÃO 2


function reverseObj2(obj) {
    const paresDeChaveValorInvertidos = Object.entries(obj)
    .map( parChaveValor => parChaveValor.reverse())


    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log("\n\n RESOLUÇÃO 2 \n\n")
console.log(reverseObj2({ a: 1, b: 2, c: 3}))