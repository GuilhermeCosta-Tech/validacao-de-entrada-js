// Neste programa de validação, suponhamos que hipoteticamente o user tem estes dados:
// Nome: Gabriel Lozano
// E-mail: gabrielsilva22@icloud.com
// Senha: Gabriel88@ip

let nome = 'Gabriel Lozano';
let email = 'gabrielsilva22@icloud.com';
let senha = 'Gabriel88@ip';

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault();  // Impede o envio do formulário até que todas as validações sejam feitas

    if (!validarNome()) return false;  // Se a validação do nome falhar, não prossegue

    if (!validarDominio()) return false;  // Se a validação do e-mail ou telefone falhar, não prossegue

    if (!validarSenha()) return false;  // Se a validação da senha falhar, não prossegue

    // Caso todas as validações passem
    console.log("Formulário validado com sucesso.");
    return true;  // Retorna true para indicar que o formulário foi validado corretamente
}

// Função para validar o nome do usuário
function validarNome() {
    const nomeInserido = document.getElementById('nome').value;  // Obtém o nome inserido pelo usuário;

    if (nomeInserido === nome) {  // E compara com o nome esperado
        console.log('O nome do usuário está correto.');
        document.getElementById('erroNome').style.display = 'none'; // Esconde o erro se estiver correto
        return true;
    } else {
        // Condicional que garante que o usuário receberá a mensagem de erro caso digite o nome incorreto
        document.getElementById('erroNome').textContent = 'Nome incorreto. Insira o nome correto.';
        document.getElementById('erroNome').style.display = 'block';
        return false;
    }
}

// Função para validar o e-mail do usuário
function validarDominio() {
    const emailInserido = document.getElementById('email').value;  // Obtém o e-mail inserido pelo usuário

    if (emailInserido === email) {  // E compara com o e-mail esperado
        console.log('E-mail correto.');
        document.getElementById('erroEmail').style.display = 'none';
        return true;
    } else {
        // Condicional que garante que o usuário receberá a mensagem de erro caso digite o e-mail incorreto
        document.getElementById('erroEmail').textContent = 'E-mail incorreto. Insira o e-mail correto.';
        document.getElementById('erroEmail').style.display = 'block';
        return false;
    }
}

// Função para validar a senha do usuário
function validarSenha() {
    const senhaInserida = document.getElementById('senha').value;  // Obtém a senha inserida pelo usuário

    if (senhaInserida === senha) {  // E compara com a senha esperada
        console.log('Senha correta.');
        document.getElementById('erroSenha').style.display = 'none';
        return true;
    } else {
        // Condicional que garante que o usuário receberá a mensagem de erro caso digite a senha incorreta
        document.getElementById('erroSenha').textContent = 'Senha incorreta. Insira a senha correta.';
        document.getElementById('erroSenha').style.display = 'block';
        return false;
    }
}
