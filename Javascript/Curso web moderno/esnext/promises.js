// promises funcionam semelhante a uma callback, como se fosse acessar algo remotamente em um servidor. Você envia um parâmetro de errro e sucesso.

function falarDepoisDe(segundos, frase) { 
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)  // aceita apenas um parametro
            //reject    - Caso usassemos o parametro reject, seria necessario chamar a funcao .catch() para que retornasse o erro.
        }, segundos * 1000) // o setTimeout() gera o tempo em milésimos, por isso ao mexer com segundos, multiplicamos por 1000, se não os números correspoderiam apenas os milésimos do tempo de espera.
     })
}

falarDepoisDe(3, 'Que legal!')  // Promises usam o .then() para efetuar o retorno de suaas chamadas, e eles podem se encadear:
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) // Qualquer erro que acontecer em qualquer um desses ".thens", o .catch ira ser acionado.
    //.catch(e => console.log(e)) // como foi mandado o parametro "frase" no reject, sera ele a ser retornado pelo catch
