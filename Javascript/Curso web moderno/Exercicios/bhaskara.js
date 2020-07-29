const media = function (nota, nota2) {
    let ponto = (nota + nota2) / 2
    if (ponto < 5) {
        console.log(`Reprovado com nota - ${ponto}`)
    }else if (ponto >= 5) {
        console.log(`Aprovado com média - ${ponto}`)
    }else {
        return 'Nota inválida'
    }
}

console.log(media(4, 5))