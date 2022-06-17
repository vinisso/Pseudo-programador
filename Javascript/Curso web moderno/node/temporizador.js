const schedule = require('node-schedule')
                                // o  */ atrás do 5 representa que ele vai ser repetido 5 vezes. Se tivesse apenas o 5, ele operaria apenas no segundo 5.
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', function () {
                                          // Já os seguintes ' * ' representam que pode ser qualquer mês/dia/hora, apenas um simbolo para um 'undefined', o schedule vai rodar a qualquer a toda hora se apenas " * " for passado.  
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
                                                      
// Setar um intervalo pelo próprio javascript para parar o o scheduleJob depois de 20 segundos  
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)   

// setImmediate
// setInterval

// Você pode instânciar objetos com o schedule. Criar um "new" dele e partir fazendo coisas sensacionais como no exemplo abaixo:

const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(1, 5)] // 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta. 5 = Sexta, 6 = Sábado. Nesse exemplo, [1 - 5] o range é de segunda a sexta
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})