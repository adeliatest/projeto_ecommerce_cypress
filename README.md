# 🛒 Projeto E-commerce Automation (Cypress)

Este é um projeto de testes automatizados de ponta a ponta (E2E) utilizando [Cypress](https://www.cypress.io/), com o objetivo de validar as funcionalidades do site [SauceDemo](https://www.saucedemo.com/).

## 💻 Sobre o Projeto

O repositório contém a automação de testes para a plataforma fictícia de e-commerce SauceDemo. O projeto foi estruturado com as melhores práticas de Quality Assurance, utilizando a metodologia **BDD (Behavior Driven Development)** para escrita de testes em linguagem natural, geração dinâmica de massa de dados e integração contínua (CI/CD). 

O foco principal é garantir o funcionamento correto de fluxos essenciais, como login, validação de erros, gestão do carrinho de compras e checkout completo.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução.
- **[Cypress](https://www.cypress.io/)**: Framework de testes automatizados E2E.
- **[Cucumber / Gherkin](https://cucumber.io/)**: Escrita de cenários em linguagem de negócios (pt-BR).
- **[Esbuild](https://esbuild.github.io/)**: Empacotador de altíssima performance para compilar os testes BDD.
- **[Faker.js](https://fakerjs.dev/)**: Geração de dados dinâmicos e aleatórios (ex: dados de entrega no checkout).
- **[Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter)**: Geração de relatórios visuais de execução em formato HTML.
- **GitHub Actions**: Automação da esteira de CI/CD para execução dos testes na nuvem.

## 📂 Estrutura do Projeto

A arquitetura foi desenhada utilizando o padrão **Page Object Model (POM)** e **Step Definitions**, separando a lógica de negócio da interação com a interface:

```text
├── .github/
│   └── workflows/
│       └── cypress.yaml         # Pipeline de CI/CD (GitHub Actions)
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Cenários de teste em Gherkin (BDD)
│   │   │   ├── carrinho.feature
│   │   │   └── login.feature
│   │   ├── carrinho.cy.js       # Testes legados (padrão Cypress)
│   │   └── login.cy.js          # Testes legados (padrão Cypress)
│   ├── fixtures/                # Massa de dados estática (JSON)
│   │   ├── carrinho.json
│   │   └── login.json
│   └── support/
│       ├── pages/               # Page Objects (Mapeamento de elementos e ações)
│       │   ├── carrinhoPage.js
│       │   └── loginPage.js
│       ├── steps/               # Implementação JavaScript dos passos do BDD
│       │   ├── carrinhoSteps.js
│       │   └── loginSteps.js
│       ├── commands.js          # Comandos customizados do Cypress
│       └── e2e.js               # Configurações globais de suporte
├── .gitignore                   # Arquivos ignorados pelo Git
├── cypress.config.js            # Configurações do Cypress (Mochawesome, Bundler)
├── package-lock.json            # Árvore de dependências exatas
├── package.json                 # Dependências principais e scripts de execução
├── README.md                    # Readme com documentação do projeto
```

## ⚙️Pré-requisitos
Para rodar este projeto localmente, você vai precisar de:

- Git
- Node.js (que já inclui o gerenciador de pacotes `npm`)

## 📦 Instalação e Configuração
O projeto já possui todas as dependências mapeadas no arquivo package.json. Ao clonar o repositório, basta rodar o comando de instalação.

1. Clone o repositório na sua máquina
```
git clone [https://github.com/adeliatest/projeto_ecommerce_cypress.git](https://github.com/adeliatest/projeto_ecommerce_cypress.git)
```
2. Acesse a pasta do projeto
```
cd projeto_ecommerce_cypress
```
3. Instale todas as dependências do projeto de uma só vez:
```
npm install
```

## 🧪 Como Executar os Testes
O projeto possui atalhos configurados no `package.json` para facilitar a execução:

1. Abra a interface do cypress e rode os testes:
```
npx cypress open
```
2. Ou rode os testes sem interface (headless):
```
npx cypress run
```
## 📝 Casos de Teste Abordados
### Tela de login - login.feature
- **Login com credenciais válidas e logout**: Valida o acesso correto ao sistema e a funcionalidade de deslogar.
- **Login com usuário incorreto**: Valida a mensagem de erro apropriada.
- **Login com senha incorreta**: Valida a mensagem de erro apropriada.
- **Login com usuário em branco**: Valida se o sistema exige o preenchimento do campo de usuário.
- **Login com senha em branco**: Valida se o sistema exige o preenchimento do campo de senha.
### Carrinho de Compras - carrinho.feature
- **Adicionar item ao carrinho pela página inicial**: Valida a alteração do botão do produto (para "Remove") e a atualização do contador no ícone do carrinho.
- **Remover item do carrinho pela página inicial**: Valida o retorno do estado do botão (para "Add to cart") e o desaparecimento do contador no ícone do carrinho.
- **Remover item direto na tela do carrinho**: Valida a exclusão do produto diretamente pela página do carrinho e o reflexo imediato no contador.
- **Visualizar itens adicionados ao carrinho**: Valida se o nome exato do produto selecionado na loja é exibido corretamente na lista de compras.
- **Realizar checkout com sucesso**: Valida o fluxo completo de compra de ponta a ponta, inserindo dados de entrega dinâmicos e garantindo a exibição da mensagem final de sucesso do pedido.

## 🔄 Integração Contínua (CI/CD)
O repositório conta com uma esteira automatizada no GitHub Actions. Os testes E2E são executados automaticamente:

- A cada novo push ou pull_request na branch principal (main).
- Diariamente durante a madrugada (00h - agendamento cron).

Em todas as execuções, um arquivo .zip contendo o Relatório Mochawesome HTML, prints e vídeos de eventuais falhas é gerado e disponibilizado para download como artefato na aba Actions.








