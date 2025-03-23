//Neste programa de validação, suponhamos que hipoteticamente o user tem estes dados:
//Nome: Gabriel Lozano
//E-mail: Gabrielsilva22@icloud.com
//Senha: Gabriel88@ip

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
    let nomeInserido = document.getElementById('nome').value;  // Obtém o nome inserido pelo usuário;
    let nome = 'Gabriel Lozano';  // E compara com o nome esperado

    if (nomeInserido === nome) {
        console.log('O nome do usuário está correto.');
        return true; 
    } else {
        // Condicional que garante que o usuário receberá a mensagem de erro caso digite o nome incorreto
        document.getElementById('erroNome').textContent = 'Nome incorreto. Insira o nome correto.'; 
        document.getElementById('erroNome').style.display = 'block'; 
        return false; 
    }
}

// Função para validar o e-mail ou telefone do usuário
function validarDominio() {
    let contato = document.getElementById('email').value;  // Busca o valor do e-mail ou número de telefone inserido pelo usuário
    
    // Regex para validar e-mail (deve ter formato válido de e-mail)
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Regex para validar telefone (formato brasileiro com DDD)
    let telefoneRegex = /^(?:\(\d{2}\)\s?|\d{2}\s?)\d{5}-\d{4}$/;

    // Verifica se o e-mail é válido
    if (emailRegex.test(contato)) {
        console.log('E-mail válido.');  
        return true;  
    } 
    // Verifica se o telefone é válido
    else if (telefoneRegex.test(contato)){
        console.log('Número de telefone válido.');
        return true; 
    } else {
        // Caso o dado inserido, seja e-mail ou número de telefone seja inválido retornará falso, e exibirá uma mensagem de erro
        document.getElementById('erroEmail').textContent = 'Insira um e-mail ou telefone válido.'; 
        document.getElementById('erroEmail').style.display = 'block'; 
        return false; 
    }
}

// Função para validar a senha do usuário
function validarSenha() {
    let senha = document.getElementById('senha').value;  
    
    // Regex para validar a senha (comm no mínimo 6 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial)
    let senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
    // Verifica se a senha corresponde ao padrão estabelecido pela regex
    if (!senhaRegex.test(senha)) {
        // Condicional para exibir a mensagem de erro caso a senha não seja válida
        document.getElementById('erroSenha').textContent = 'A senha deve conter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.'; 
        document.getElementById('erroSenha').style.display = 'block';  
        return false;  
    } else {
        // Caso a senha seja válida, a mensagem de erro é removida
        document.getElementById('erroSenha').style.display = 'none';  
        console.log('Senha válida.'); 
        return true;  
    }
}