function somarElementos(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }

    return total;
}

console.log("Exercício 5:");
console.log(somarElementos([10, 20, 30, 40]));