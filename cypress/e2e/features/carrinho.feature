# language: pt
Funcionalidade: Carrinho de compras - SauceDemo

  Contexto: Pre-condicao de Login
    Dado que eu acesso a pagina de login
    E faco login com o usuario "standard_user" e senha "secret_sauce"

  Cenario: Adicionar item ao carrinho pela pagina inicial
    Quando eu adiciono a mochila ao carrinho
    Entao o botao da mochila deve mudar para "Remove"
    E o contador do carrinho deve exibir "1"

  Cenario: Remover item do carrinho pela pagina inicial
    Dado que adicionei a mochila ao carrinho
    Quando eu removo a mochila da pagina inicial
    Entao o botao da mochila deve mudar para "Add to cart"
    E o contador do carrinho deve desaparecer

  Cenario: Remover item direto na tela do carrinho
    Dado que adicionei a mochila ao carrinho
    Quando eu acesso o carrinho e removo a mochila
    Entao o contador do carrinho deve desaparecer

  Cenario: Visualizar itens adicionados ao carrinho
    Quando eu adiciono a luz de bicicleta ao carrinho
    E acesso a pagina do carrinho
    Entao devo ver o item "Sauce Labs Bike Light" na lista

  Cenario: Realizar checkout com sucesso
    Dado que adicionei a luz de bicicleta ao carrinho
    E acesso a pagina do carrinho
    Quando eu inicio o checkout
    E preencho os dados de entrega com informacao dinamica
    E finalizo a compra
    Entao devo ver a mensagem de sucesso "Thank you for your order!"