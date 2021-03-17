function arrayarray(obj){
    let resultado = []

    for(let chave in obj){
        resultado.push([chave, obj[chave] ])
    }
    return resultado
}

console.log(arrayarray({nome: 'Ana', Cargo: 'Desenvolvedora'}))

//Outra forma

function arrayzando(obj){
    const chaves = Object.keys(obj)
    const resultado = chaves.map(chave => [chave, obj[chave]])
    return resultado
}
console.log(arrayzando({nome: 'Alejandro', Cargo: 'Triste'}))

// Mais uma

function alaoarray(obj){
    return Object.entries(obj)
}
console.log(alaoarray({nome: 'Claudio', Cargo: 'Sim'}))