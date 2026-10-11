/// <reference types="cypress" />
import loginPage from '../support/pages/loginPage'

describe('Tela de login - SauceDemo', () => {
  beforeEach(() => {
    // tela de login
    loginPage.acessarPagina();
  });

  it('Login - credenciais válidas e logout', () => {
    // realiza login  
    loginPage.realizarLogin('standard_user', 'secret_sauce');

    // valida texto da página após o login
    loginPage.seletores.tituloPagina().should('have.text', 'Products');
    // logout após validação
    loginPage.realizarLogout();
    // valida url e botão após logout
    cy.url().should('eq', 'https://www.saucedemo.com/');
    loginPage.seletores.botaoLogin().should('be.visible');
  });

  it('Login - usuário incorreto', () => {
    // realiza login
    loginPage.realizarLogin('usuario_incorreto', 'secret_sauce')

    // validação da mensagem de erro - usuário ou senha incorreta
    loginPage.seletores.mensagemErro().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login - senha incorreta', () => {
    // realiza login
    loginPage.realizarLogin('standard_user', 'senha_incorreta')

    // validação da mensagem de erro - usuário ou senha incorreta
    loginPage.seletores.mensagemErro().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login - usuário em branco', () => {
    // realiza login
    loginPage.realizarLogin(null, 'secret_sauce');
    
    // validação da mensagem de erro - campo obrigatório
    loginPage.seletores.mensagemErro().should('have.text', 'Epic sadface: Username is required');
  });

  it('Login - senha em branco', () => {
    // realiza login
    loginPage.realizarLogin('secret_sauce', null);
    
    // validação da mensagem de erro - campo obrigatório
    loginPage.seletores.mensagemErro().should('have.text', 'Epic sadface: Password is required');
  });
  
});

