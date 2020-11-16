const polegadas = function(x){
    a = (x / 2.54)
    a = a.toFixed(2) +  " polegadas"
    return a
}

console.log(polegadas(12))

//

console.log("Metros para centímetros...")

const centi = metros => {
    metros * 100
}

console.log(centi(20))