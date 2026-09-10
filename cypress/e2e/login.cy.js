/// <reference types="cypress" />

describe('Tela de login - SauceDemo', () => {
  beforeEach(() => {
    // tela de login
    cy.visit('https://saucedemo.com')
  });

  it('Login - credenciais válidas e logout', () => {
    // usuário
    cy.get('[data-test="username"]').type('standard_user');
    // senha
    cy.get('[data-test="password"]').type('secret_sauce');
    // botão de login
    cy.get('[data-test="login-button"]').click();
    // validação de texto após login com sucesso
    cy.get('[data-test="title"]').should('have.text', 'Products');

    // abre side-bar
    cy.get('#react-burger-menu-btn').click();
    // botão de logout
    cy.get('[data-test="logout-sidebar-link"]').click();
    // validação após logout
  });

  it('Login - usuário incorreto', () => {
    // usuário incorreto
    cy.get('[data-test="username"]').type('usuario_incorreto');
    // senha
    cy.get('[data-test="password"]').type('secret_sauce');
    // botão de login
    cy.get('[data-test="login-button"]').click();
    // validação da mensagem de erro - usuário ou senha incorreta
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login - senha incorreta', () => {
    // usuário incorreto
    cy.get('[data-test="username"]').type('standard_user');
    // senha
    cy.get('[data-test="password"]').type('senha_incorreta');
    // botão de login
    cy.get('[data-test="login-button"]').click();
    // validação da mensagem de erro - usuário ou senha incorreta
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login - usuário em branco', () => {
    // senha
    cy.get('[data-test="password"]').type('secret_sauce');
    // botão de login
    cy.get('[data-test="login-button"]').click();
    // verificar mensagem de erro - campos obrigatórios
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
  });

  it('Login - senha em branco', () => {
    // usuário
    cy.get('[data-test="username"]').type('standard_user');
    // botão de login
    cy.get('[data-test="login-button"]').click();
    // verificar mensagem de erro - campos obrigatórios
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
  });
  
});

