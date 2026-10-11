// cypress/support/pages/CarrinhoPage.js

class CarrinhoPage {
    // 1. Mapeamento de Elementos (Seletores)
    seletoresCarrinho = {
        // adição e remoção de itens - carrinho
        botaoAdicionarMochila: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        botaoRemoverMochila: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        botaoAdicionarLuzBicicleta: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        badgeCarrinho: () => cy.get('[data-test="shopping-cart-badge"]'),
        linkCarrinho: () => cy.get('[data-test="shopping-cart-link"]'),

        // checkout - carrinho
        botaoCheckout: () => cy.get('[data-test="checkout"]'),
        botaoContinuar: () => cy.get('[data-test="continue"]'),
        botaoFinalizar: () => cy.get('[data-test="finish"]'),
        nomeItemInventario: () => cy.get('[data-test="inventory-item-name"]'),
        campoPrimeiroNome: () => cy.get('[data-test="firstName"]'),
        campoSobrenome: () => cy.get('[data-test="lastName"]'),
        campoCep: () => cy.get('[data-test="postalCode"]'),
        mensagemSucesso: () => cy.get('[data-test="complete-header"]')
    }

    // adição e remoção - carrinho
    adicionarMochila() {
        this.seletoresCarrinho.botaoAdicionarMochila().click();
    }

    removerMochila() {
        this.seletoresCarrinho.botaoRemoverMochila().click();
    }

    adicionarLuzBicicleta() {
        this.seletoresCarrinho.botaoAdicionarLuzBicicleta().click();
    }

    // checkout - carrinho
    abrirCarrinho() {
        this.seletoresCarrinho.linkCarrinho().click();
    }

    iniciarCheckout() {
        this.seletoresCarrinho.botaoCheckout().click();
    }

    preencherDadosCheckout(nome, sobrenome, cep) {
        this.seletoresCarrinho.campoPrimeiroNome().clear().type(nome);
        this.seletoresCarrinho.campoSobrenome().clear().type(sobrenome);
        this.seletoresCarrinho.campoCep().clear().type(cep);
    }

    continuarCheckout() {
        this.seletoresCarrinho.botaoContinuar().click();
    }

    finalizarCompra() {
        this.seletoresCarrinho.botaoFinalizar().click();
    }
}

export default new CarrinhoPage();