const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// Filtros

const chines = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (f, fAtual) => {
    return f.salario < fAtual.salario ? f : fAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

//    console.log(funcionarios)

    const resultado = funcionarios
        .filter(chines)
        .filter(mulher)
        .reduce(menorSalario)
    
      console.log(resultado)
})