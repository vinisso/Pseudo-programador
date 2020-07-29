// '==' É IGUAL?
// '===' É ESTRITAMENTE IGUAL? 
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Date(0) irá retornar a data de referência de JS. 1° de Janeiro de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
//Não haverá diferença, pois aqui eles estão comparando endereço de memória.
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())
//Aqui deu certo pois estão agora comparando parâmetros numbers. (a função getTime retorna um number com a hora em que foi chamado)
console.log('13)', undefined == null)
console.log('14)', undefined === null)
