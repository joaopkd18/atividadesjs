function calcularMediaArray(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}

// Exemplo:
console.log(calcularMediaArray([7, 8, 9]));


//tive ajuda do leo 