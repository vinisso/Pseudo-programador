Array.prototype.filter2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const lista = [
    { nome: 'Notebook', preco: 3.699, fragil: true },
    { nome: 'Playstation 5', preco: 5.000, fragil: true },
    { nome: 'Nokia Tijolão', preco: 200, fragil: /*DEFINITIVAMENTE*/ false },
    { nome: 'XANDÃO', preco: 24, fragil: true },
    { nome: 'Rap do racionais', preco: 99999999999999, fragil: false }
]

const caro = lista => lista.preco >= 500 
const fragil = lista => lista.fragil

console.log(lista.filter2(caro).filter2(fragil))