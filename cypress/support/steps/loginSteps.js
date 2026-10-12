import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginPage';

Given('que eu acesso a pagina de login', () => {
    // acessa página de login
    LoginPage.acessarPagina();
    
    // carrega fixture dos dados
    cy.fixture('login.json').as('dados');
});
When('eu insiro credenciais validas', function () {
    // login com credenciais válidas
    LoginPage.realizarLogin(this.dados.valido.usuario, this.dados.valido.senha);
});


Then('sou redirecionado para a pagina de produtos', function () {
    // validação do título da página pós login
    LoginPage.seletoresLogin.tituloPagina().should('have.text', this.dados.valido.tituloAposLogin);
    
    // valida url da página
    cy.url().should('include', '/inventory.html');
});

When('eu insiro o usuario {string} e a senha {string}', (usuario, senha) => {
    // if para campo em branco
    const user = usuario === "" ? null : usuario;
    const pass = senha === "" ? null : senha;
    
    LoginPage.realizarLogin(user, pass);
});

Then('devo ver a mensagem de erro {string}', (mensagemEsperada) => {
    // valida mensagem de erro
    LoginPage.seletoresLogin.mensagemErro().should('have.text', mensagemEsperada);
});