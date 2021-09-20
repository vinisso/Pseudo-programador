const soma = array => array.reduce((acumulador, atual) => acumulador + atual)
const media = array => soma(array) / array.length


function recebeEstudanteBom(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
              valor = 1
        
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })

    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante

}

console.log(recebeEstudanteBom({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }
)