/// <reference types="cypress" />
import loginPage from "./pages/loginPage"

// login na interface
Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
    loginPage.acessarPagina();
    loginPage.realizarLogin(usuario, senha)
})

// login pulando a interface - bypass de UI - cookies
// é mais útil quando se tem muitos testes, para que o fluxo de login
// não se repita tantas vezes e consuma mais tempo
Cypress.Commands.add('loginViaCookie', (usuario = 'standard_user') => {
    cy.setCookie('session-username', usuario);
});