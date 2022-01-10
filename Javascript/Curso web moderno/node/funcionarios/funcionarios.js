const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {

    const funcionarios = response.data
    
    const mulher = dado => dado.genero === 'F'
    const china = dado => dado.pais === 'China'

    const resultado = funcionarios.filter(mulher).filter(china)
    
    console.log(resultado)

})
