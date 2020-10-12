const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
// Atributos recebidos por herança não são listados no Object.keys

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
/* Acima temos uma "função" que nos diz se o atributo recebido é próprio do objeto ou se foi recebido por herança.
Ao utilizar a função "hasOwnProperty(key)" será feito uma busca no objeto que você escolheu. E ver se dentro dele
foi definido aquele atributo. Caso não, ele retornaria false, porém tratamos a exceção com uma template string. 
*/