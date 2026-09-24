function processarVenda(valorBruto) {
    if (valorBruto > 100) {
        return aplicarDesconto(valorBruto, 10);
    } else {
        return valorBruto;
    }
}

// Exemplos:
console.log(processarVenda(200)); // 180
console.log(processarVenda(80));  // 80
  

//tive dificuldade mas vim na minitoria 