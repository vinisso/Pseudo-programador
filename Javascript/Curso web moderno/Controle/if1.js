function boaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com', + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function verdadeSejaDita(valor) {
    if(valor) {
        console.log('É verdade...', + valor)
    }
}

verdadeSejaDita()
verdadeSejaDita(null)
verdadeSejaDita(undefined)
verdadeSejaDita(NaN)
verdadeSejaDita('')
verdadeSejaDita(0)
verdadeSejaDita(-1)
verdadeSejaDita(' ')
verdadeSejaDita('?')
verdadeSejaDita([])
verdadeSejaDita([1, 2, 3, 4])
verdadeSejaDita({})