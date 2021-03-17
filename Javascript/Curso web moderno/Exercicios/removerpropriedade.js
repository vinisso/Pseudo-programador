function remove(obj, nome){
    const copia = Object.assign({}, obj)
    delete copia[nome]
    return copia
}

console.log(remove({a:1, b:2, C:3}, "a"))

// Outra forma

function removerProp(objeto, nomep){
    const copy = {...objeto}
    delete copy[nomep]
    return copy
}

console.log(removerProp({a:1, b:2, C:3}, "a"))