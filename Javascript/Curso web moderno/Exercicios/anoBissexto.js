const anobi = ano => {
    const anodiviquatro = ano % 4 == 0
    const anoporcem = ano % 100 == 0
    const anoporquatrocentos = ano % 400 == 0

    return (anodiviquatro && !anoporcem) || anoporquatrocentos
}

console.log(anobi(2000))

//Resolução 2



// Checa indiretamente se o mês de fevereiro do ano informado tem 29 dias. Utilizando o método 'Date'... Interessantissimo
function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
    }

console.log(checarAnoBissexto(2000))