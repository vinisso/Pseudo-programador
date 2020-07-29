function Carro (VelocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = VelocidadeMaxima
        }
    }

// Metodo público
this.getVelocidadeAtual = function () {
    return velocidadeAtual + ' km/h'
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
