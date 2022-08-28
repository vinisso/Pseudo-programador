// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmentro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }

// Criar um clone que irá receber todos os atributos do objeto original para si.

const clone = { ativo: true, ...funcionario } // Pode até ter outros parâmetros, assim como o "ativo: true"
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Marcos']
console.log(grupoFinal)