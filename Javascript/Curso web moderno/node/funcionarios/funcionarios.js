const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const paraObjeto = json => JSON.parse(json)
    const nomes = dado => dado.nome
    
    let resultado = funcionarios.map(nomes)

    console.log(resultado)

})
