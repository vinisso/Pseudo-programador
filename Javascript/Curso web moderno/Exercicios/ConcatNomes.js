function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

const conc = fun => {
    console.log('Olá, '.concat(fun, '!'))
    letra = fun.split('')
    console.log('Seu nome tem ' + letra + ' letras')
    
    if (fun.isString && fun > 7) {
        return 'Nome longo do cacete'
    } 
}

conc('Jujubeola')
