const meses = (num) => {
    switch (num) {
        case 1:
            return 'Janeiro'
            break
        case 2:
            return 'Fevereiro'
            break
        case 3: 
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break

        default:
            return 'Rato'
    }

}


console.log(meses(6))

//Resolução 2

function receberNomeDoMes(numero) {
const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
return mapeamento[--numero]
}

console.log(receberNomeDoMes(5))