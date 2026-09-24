function autenticarUsuario(usuario, senha) {
    if (!validarSenha(senha)) {
        return "Senha muito curta";
    }

    if (usuario === "admin" && senha === "123456") {
        return "Acesso concedido para admin";
    } else {
        return "Senha incorreta para admin";
    }
}

// Exemplos:
console.log(autenticarUsuario("admin", "123456"));
console.log(autenticarUsuario("admin", "123"));
console.log(autenticarUsuario("joao", "123456"));


//pedi pra ia me ajudar a fazer 