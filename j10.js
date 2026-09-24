function verificarAprovacao(nota) {
    return nota >= 60;
}

function contarAprovados(listaAlunos) {
    let totalAprovados = 0;

    for (let i = 0; i < listaAlunos.length; i++) {
        const aluno = listaAlunos[i];

        if (verificarAprovacao(aluno.nota)) {
            totalAprovados++;
        }
    }

    return totalAprovados;
}


const alunos = [
    {
        nome: "João",
        nota: 80
    },
    {
        nome: "Maria",
        nota: 65
    },
    {
        nome: "Pedro",
        nota: 45
    },
    {
        nome: "Ana",
        nota: 55
    }
];


const total = contarAprovados(alunos);


console.log("Total de aprovados:", total);


//na minha visao  foi a mais dificil usei o chat pra fazer todos os processos 