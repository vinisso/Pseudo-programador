const valor = 'Global'

function nao() {
    const valor = 'Arroz'
    function sim() {
        return valor
    }return sim
}

const hehe = nao()
console.log(hehe())