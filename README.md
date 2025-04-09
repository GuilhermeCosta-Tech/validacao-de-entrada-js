# 📌 Projeto: Validação de Dados com Regex

## 📖 Sobre o Projeto
Este projeto simula um sistema de coleta e validação de dados inseridos pelo usuário. O foco principal é comparar as informações fornecidas (como e-mail ou número de telefone) com padrões predefinidos utilizando expressões regulares (Regex). A ideia é garantir que os dados sigam um formato válido antes de serem processados.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Expressões Regulares (Regex)

## 🎯 Funcionalidades
- Formulário para inserção de dados (e-mail ou número de telefone).
- Validação dos dados utilizando Regex.
- Mensagens de erro para entradas inválidas.
- Exibição do status da validação ao usuário.

## 📂 Estrutura do Projeto
```
📂 vendas-online-validacao
 ├── 📁 assets        # Arquivos estáticos (imagens, estilos, scripts)
 ├── 📄 index.html    # Página principal com o formulário
 ├── 📄 styles.css    # Estilos da página
 ├── 📄 script.js     # Lógica de validação usando Regex
 ├── 📄 README.md     # Documentação do projeto
```

## 🛠 Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/GuilhermeCosta-Tech/validacao-de-entrada-js.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd Projeto-Simples
   ```
3. Abra o arquivo `index.html` em um navegador.

## 📝 Exemplos de Validação com Regex (dados fictícios):
- **Nome válido:** `Gabriel Lozano`
- **Nome inválido:** `João Victor`
- **E-mail válido:** `Gabrielsilva22@icloud.com`
- **E-mail inválido:** `Joãovictor@gmail.com`
- **Telefone válido:** `+55 11 98765-4321`
- **Telefone inválido:** `1198765-4321`

let nome = 'Gabriel Lozano';
let email = 'Gabrielsilva22@icloud.com';
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
    var nomeInserido = document.getElementById('nome').value;  // Obtém o nome inserido pelo usuário;
    var nome = 'Gabriel Lozano';  // E compara com o nome esperado

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
    var contato = document.getElementById('email').value;  // Busca o valor do e-mail ou número de telefone inserido pelo usuário

    // Regex para validar e-mail (deve ter formato válido de e-mail)
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Regex para validar telefone (formato brasileiro com DDD)
    var telefoneRegex = /^(?:\(\d{2}\)\s?|\d{2}\s?)\d{5}-\d{4}$/;

    // Verifica se o e-mail é válido
    if (emailRegex.test(contato)) {
        console.log('E-mail válido.');
        return true;
    }
    // Verifica se o telefone é válido
    else if (telefoneRegex.test(contato)) {
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
    var senha = document.getElementById('senha').value;

    // Regex para validar a senha (comm no mínimo 6 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial)
    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

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

## 📌 Melhorias Futuras
- Integração com um banco de dados para armazenar as informações coletadas.
- Implementação de backend para processamento avançado dos dados.
- Adição de novos padrões de validação para diferentes tipos de entrada.

## 📄 Licença
Este projeto é de código aberto para todos.

---
📌 *Desenvolvido como parte de um projeto acadêmico.*

