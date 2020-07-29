function teste1(num) {
    if(num >= 7) 
        console.log(num)

    console.log('Final') // O código sem as chaves ('{}') só le a primeira sentença 'console.log(num)'
     
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num >= 7); // ';' setença de código fazia que termina com ponto e virgula. Não usar com estruturas de controle.
    {
        console.log(num)
    }
}
teste2(6.1)
teste2(8)