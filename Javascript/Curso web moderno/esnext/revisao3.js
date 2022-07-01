// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 } 
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// Melhorias de Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    //nome: nome, <-- não mais necessário.
    ola() {
        return 'Oi gente!'
    }
    /*ola: function() {         <-- não mais necessário.
    }                              
        return 'Oi gente!'
]*/
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())