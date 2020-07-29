let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Lembre-se de usar o let quando se há pretenções de alterar o valor da variável

isAtivo = 1
console.log(!!isAtivo)
/* Aqui para definir um valor aleatório como tipo booleano utilizamos a 
negação (!). A negação é como o not em python. se duas negações(!!), o valor
volta a se tornar o original, no caso o "true", então ficaria = ('no 1') = False ('no no 1') = True.
Quando tem duas negações uma é negada pela outra. Então o não(false) se torna sim(true).
*/
console.log(!isAtivo)

console.log(!true)
console.log(!!true)
console.log(!false)
console.log(!!false)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'alo')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos...")
console.log(!!0)
console.log(!!'') //string vazia, pra ser true tenha ao menos um espaço.
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // os "||" serve como "ou" ou "or" em outras linguens

let nome = ''
console.log(nome || 'Desconhecido') // o "||" também preenche variáveis vazias(Falsas) como visto agora
nome = 'Lucas'
console.log(nome || 'Desconhecido')