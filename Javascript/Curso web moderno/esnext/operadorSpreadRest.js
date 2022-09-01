// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmentro de função 

// usar spread com objeto

const funcionario = { nome: 'Ivan', salario: 2899.99 }
clone = { ativo:true, ...funcionario } // Antes do operador rest é possível aplicar outros tipos de atributos

console.log(clone)

// usar spread com array
const grupoA = ['Josias', 'Andréia', 'Sarah', 'Manteigo']
const grupoFinal = ['Mathias', ...grupoA, 'Jonas', 'Georgio']

console.log(grupoFinal)