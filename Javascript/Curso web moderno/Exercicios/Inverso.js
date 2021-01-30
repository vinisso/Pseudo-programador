function inverso(valor){
    tipo = typeof valor

    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else {
        return `Booleanos ou números esperados, mas o paramêtro é do tipo ${tipo}`
    }
}


console.log(inverso(true))
console.log(inverso(76))
console.log(inverso(-235))
console.log(inverso('alo'))