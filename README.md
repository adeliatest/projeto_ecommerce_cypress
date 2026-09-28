# Projeto E-commerce Automation (Cypress)

Este é um projeto de testes automatizados de ponta a ponta (E2E) utilizando [Cypress](https://www.cypress.io/), com o objetivo de validar as funcionalidades do site [SauceDemo](https://www.saucedemo.com/).

## 💻 Sobre o Projeto

O repositório contém a automação de testes para a plataforma fictícia de e-commerce SauceDemo. O foco principal é garantir o funcionamento correto de fluxos essenciais, como login, validação de campos obrigatórios, mensagens de erro e, futuramente, a manipulação do carrinho de compras.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[Cypress](https://www.cypress.io/)**: Framework de testes automatizados E2E.

## 📂 Estrutura do Projeto

A estrutura de pastas e arquivos baseia-se no padrão do Cypress:

```text
├── cypress/
│   ├── e2e/
│   │   ├── carrinho.cy.js       # Testes relacionados ao carrinho de compras
│   │   └── login.cy.js          # Testes de autenticação (login, logout, e validações de erro)
│   ├── fixtures/                # Dados estáticos (massa de testes)
│   └── support/                 # Comandos customizados e configurações globais
├── cypress.config.js            # Configurações do Cypress
├── package.json                 # Dependências e scripts do projeto
└── README.md                    # Documentação do projeto
```

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você vai precisar de:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (que já inclui o `npm`)

## 📦 Instalação

1. Clone o repositório em sua máquina:
   ```bash
   git clone https://github.com/adeliatest/projeto_ecommerce_cypress.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd projeto_ecommerce_cypress
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## 🧪 Como Executar os Testes

Existem duas principais formas de executar os testes:

### Modo Interativo (Test Runner)
Este modo abre a interface do Cypress e permite acompanhar visualmente passo a passo a execução dos testes:
```bash
npx cypress open
```

### Modo Headless (Terminal)
Este modo executa todos os testes em segundo plano, gerando relatórios de texto no terminal. Ideal para pipelines de CI/CD:
```bash
npx cypress run
```

## 📝 Casos de Teste Abordados

### Autenticação (`login.cy.js`)
- **Login com credenciais válidas e logout**: Valida o acesso correto ao sistema e a funcionalidade de deslogar.
- **Login com usuário incorreto**: Valida a mensagem de erro apropriada.
- **Login com senha incorreta**: Valida a mensagem de erro apropriada.
- **Login com usuário em branco**: Valida se o sistema exige o preenchimento do campo de usuário.
- **Login com senha em branco**: Valida se o sistema exige o preenchimento do campo de senha.

### Carrinho de Compras (`carrinho.cy.js`)
- Testes a serem implementados futuramente.
