const aprovados = ['Agahta', 'Aido', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

//Passando função por paramêtro

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)