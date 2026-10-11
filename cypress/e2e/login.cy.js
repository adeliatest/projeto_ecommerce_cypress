/// <reference types="cypress" />
import LoginPage from '../support/pages/loginPage';

describe('Tela de login - SauceDemo', () => {
  
  beforeEach(() => {
    // acessa página de login
    LoginPage.acessarPagina();
    // carrega a fixture e dá um apelido
    cy.fixture('example.json').as('dados');
  });

  it('Login - credenciais válidas e logout', function() {
    // login com dados válidos
    LoginPage.realizarLogin(this.dados.valido.usuario, this.dados.valido.senha);
    
    // valida título da página após login
    LoginPage.seletoresLogin.tituloPagina().should('have.text', this.dados.valido.tituloAposLogin);

    // realiza logout
    LoginPage.realizarLogout();
    
    // validações pós-logout
    cy.url().should('eq', 'https://www.saucedemo.com/');
    LoginPage.seletoresLogin.botaoLogin().should('be.visible');
  });

  it('Login - usuário incorreto', function() {
    // login com usuário inválido e a senha válida
    LoginPage.realizarLogin(this.dados.invalido.usuario, this.dados.valido.senha);
    
    // valida a mensagem de erro
    LoginPage.seletoresLogin.mensagemErro().should('have.text', this.dados.invalido.erroCredenciais);
  });

  it('Login - senha incorreta', function() {
    // login usuário válido e a senha inválida
    LoginPage.realizarLogin(this.dados.valido.usuario, this.dados.invalido.senha);
    
    // valida a mensagem de erro
    LoginPage.elementos.mensagemErro().should('have.text', this.dados.invalido.erroCredenciais);
  });

  it('Login - usuário em branco', function() {
    // login com campo usuário em branco
    LoginPage.realizarLogin(null, this.dados.valido.senha);
    
    // valida a mensagem de erro para campo obrigatório
    LoginPage.seletoresLogin.mensagemErro().should('have.text', this.dados.invalido.erroUsuarioVazio);
  });

  it('Login - senha em branco', function() {
    // login com campo senha em branco
    LoginPage.realizarLogin(this.dados.valido.usuario, null);
    
    // valida a mensagem de erro para campo obrigatório
    LoginPage.seletoresLogin.mensagemErro().should('have.text', this.dados.invalido.erroSenhaVazia);
  });
  
});