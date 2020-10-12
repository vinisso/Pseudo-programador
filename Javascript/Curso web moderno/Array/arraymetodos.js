const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona novos elementos no Array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // Massa quebrou novamente :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array, pegando partes dele
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Você pode determinar até qual informação irá pegar. Porém ele não inclui o ultimo indice informado.
console.log(algunsPilotos2)