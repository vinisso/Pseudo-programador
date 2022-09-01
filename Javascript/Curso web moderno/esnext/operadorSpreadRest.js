<<<<<<< HEAD
// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmentro de função 

// usar spread com objeto

const funcionario = { nome: 'Ivan', salario: 2899.99 }
clone = { ativo:true, ...funcionario } // Antes do operador rest é possível aplicar outros tipos de atributos

console.log(clone)

// usar spread com array
const grupoA = ['Josias', 'Andréia', 'Sarah', 'Manteigo']
const grupoFinal = ['Mathias', ...grupoA, 'Jonas', 'Georgio']

=======
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
>>>>>>> fc2e7fc3832035304a3cd5200b78954facc472f0
console.log(grupoFinal)