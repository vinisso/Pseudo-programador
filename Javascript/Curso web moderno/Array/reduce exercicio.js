const animais = [
    { nome: 'Claudinho', idade: 5, tipo: 'Cachorro' },
    { nome: 'Renatael', idade: 9, tipo: 'Gato' },
    { nome: 'Jeremias', idade: 3, tipo: 'Gato' },
    { nome: 'Jobias', idade: 12, tipo: 'Cachorro' },
    { nome: 'Robisney', idade: 7, tipo: 'Cachorro'}
]

const inner = animais.reduce((total, elemento) => {
    if (elemento.tipo === 'Cachorro') return total += (elemento.idade *=7)
    else return total
}, 0)  

//console.log(inner)

const nome = animais.map(a => a.nome)
console.log(nome)