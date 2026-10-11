/// <reference types="cypress" />
import loginPage from '../support/pages/LoginPage';

describe('Tela de login - SauceDemo', () => {
  
  beforeEach(() => {
    // acessa página de login
    loginPage.acessarPagina();
    // carrega a fixture e dá um apelido
    cy.fixture('example.json').as('dados');
  });

  it('Login - credenciais válidas e logout', function() {
    // login com dados válidos
    loginPage.realizarLogin(this.dados.valido.usuario, this.dados.valido.senha);
    
    // valida título da página após login
    loginPage.seletores.tituloPagina().should('have.text', this.dados.valido.tituloAposLogin);

    // realiza logout
    loginPage.realizarLogout();
    
    // validações pós-logout
    cy.url().should('eq', 'https://www.saucedemo.com/');
    loginPage.seletores.botaoLogin().should('be.visible');
  });

  it('Login - usuário incorreto', function() {
    // login com usuário inválido e a senha válida
    loginPage.realizarLogin(this.dados.invalido.usuario, this.dados.valido.senha);
    
    // valida a mensagem de erro
    loginPage.seletores.mensagemErro().should('have.text', this.dados.invalido.erroCredenciais);
  });

  it('Login - senha incorreta', function() {
    // login usuário válido e a senha inválida
    loginPage.realizarLogin(this.dados.valido.usuario, this.dados.invalido.senha);
    
    // valida a mensagem de erro
    loginPage.seletores.mensagemErro().should('have.text', this.dados.invalido.erroCredenciais);
  });

  it('Login - usuário em branco', function() {
    // login com campo usuário em branco
    loginPage.realizarLogin(null, this.dados.valido.senha);
    
    // valida a mensagem de erro para campo obrigatório
    loginPage.seletores.mensagemErro().should('have.text', this.dados.invalido.erroUsuarioVazio);
  });

  it('Login - senha em branco', function() {
    // login com campo senha em branco
    loginPage.realizarLogin(this.dados.valido.usuario, null);
    
    // valida a mensagem de erro para campo obrigatório
    loginPage.seletores.mensagemErro().should('have.text', this.dados.invalido.erroSenhaVazia);
  });
  
});