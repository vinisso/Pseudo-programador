function buscaSemelhanca(comeco, palavras){
const resultado = []

    for (let palavra of palavras)
        if (palavra.includes(comeco))
            resultado.push(palavra)
    
return resultado

}

console.log(buscaSemelhanca('pro', ['programação', 'portifólio']))