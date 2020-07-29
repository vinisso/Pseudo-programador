let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'text'

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca. Sem var/let/const!
abc = 3 //Não faça isso em casa!!1
console.log(global.abc)

//NODE
//module.exports = { e: 456, f: false, g: 'Text'}