const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado! com nota: ', + nota)
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(6)
imprimirResultado(9)
imprimirResultado('Epa!!!') // Cuidado com a fraca tipagem do JS
 