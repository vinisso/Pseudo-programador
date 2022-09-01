// tagged templates - processa o template string dentro de uma function

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

// Partes é aquilo que não é interpolado (ou seja, aquilo fora do "${}" em uma template string. Esses ficam dentro do ...valores). logo abaixo, ele vai receber toda aquela linha, porém, com valor vazio lugar das constantes "aluno" e "situacao"

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)

// Aqui os valores representam apenas " 'Gui' " e " 'Aprovado' ". Nada mais. Apenas aquilo interpolado pelo "${}".
