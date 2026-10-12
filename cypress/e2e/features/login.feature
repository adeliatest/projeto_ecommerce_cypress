# language: pt
Funcionalidade: Tela de login - SauceDemo

  Cenario: Login com sucesso
    Dado que eu acesso a pagina de login
    Quando eu insiro credenciais validas
    Entao sou redirecionado para a pagina de produtos

  Esquema do Cenario: Login inválido - <caso_de_teste>
    Dado que eu acesso a pagina de login
    Quando eu insiro o usuario "<usuario>" e a senha "<senha>"
    Entao devo ver a mensagem de erro "<mensagem_esperada>"

    Exemplos:
      | usuario       | senha        | caso_de_teste      | mensagem_esperada                                                         |
      | invalido      | secret_sauce | usuario invalido   | Epic sadface: Username and password do not match any user in this service |
      | standard_user | errada123    | senha invalida     | Epic sadface: Username and password do not match any user in this service |
      |               | secret_sauce | usuario em branco  | Epic sadface: Username is required                                        |
      | standard_user |              | senha em braco     | Epic sadface: Password is required                                        |