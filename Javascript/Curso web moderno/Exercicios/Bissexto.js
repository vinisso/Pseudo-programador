function anobissexto (ano){
    const anoporquatro = ano % 4 === 0
    const anoporcem = ano % 100 === 0
    const anoporquatrocentos = ano % 400 === 0
    const senju = (anoporquatro && !anoporcem) || anoporquatrocentos
    if (senju){
        return ano + ' - Sim, como descobriu?'
    }
    else {
        return ano + ' NÃO É BISSEXTO'
    }
}

if (anobissexto()){
    return 'sim'
}

console.log(anobissexto(2020))
console.log(anobissexto(2021))