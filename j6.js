function formatarPessoa(pessoa) {
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}.`;
}

console.log("\nExercício 6:");

const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "programador"
};

console.log(formatarPessoa(pessoa));

//ate agora foi a que eu tive mas dificuldade tive ajuda da yara