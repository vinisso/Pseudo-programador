// Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

// ele partilha de algumas funções do Map()

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) 
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

// Assim como o Map era possível ser criado por uma matriz (linha 8 do map.js);

const nomes = ['Rayane', 'Claudio', 'Rodolfo', 'Rodolfo', 'Claudio', 'Evandroléu' ]
const nomesSet = new Set(nomes)
console.log(nomesSet)