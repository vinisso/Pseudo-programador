function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

const conc = fun => {
    console.log('Olá, '.concat(fun, '!'))
    letra = fun.split('')
    console.log('Seu nome tem ' + letra.length + ' letras')
    
    if (fun.isString && letra.length > 7) {
        return 'Nome longo do cacete'
    } 
}

conc('Jujubeola')
