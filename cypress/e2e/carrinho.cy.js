/// <reference types="cypress" />
import LoginPage from '../support/pages/loginPage';
import CarrinhoPage from '../support/pages/carrinhoPage';

describe('Carrinho de compras - SauceDemo', () => {
    
    beforeEach(() => {
        // abre página de login
        LoginPage.acessarPagina()

        // carrega a fixture do carrinho
        cy.fixture('carrinho.json').as('dados');
        
        // realiza login
        LoginPage.realizarLogin('standard_user', 'secret_sauce')
    });

    it('Carrinho - adicionar item ao carrinho pela página inicial', function() {
        // adiciona item ao carrinhio
        CarrinhoPage.adicionarMochila();
        
        // valida mudança de texto do botão
        CarrinhoPage.seletoresCarrinho.botaoRemoverMochila()
            .should('be.visible')
            .and('have.text', this.dados.textos.remover);
        
        // verifica contagem de itens
        CarrinhoPage.seletoresCarrinho.badgeCarrinho()
            .should('be.visible')
            .and('have.text', this.dados.textos.quantidadeUm);
    });

    it('Carrinho - remover item do carrinho pela página inicial', function() {
        // adiciona item ao carrinho e remove em seguida
        CarrinhoPage.adicionarMochila();
        CarrinhoPage.removerMochila();

        // valida mudança de texto para "add to cart"
        CarrinhoPage.seletoresCarrinho.botaoAdicionarMochila()
            .should('be.visible')
            .and('have.text', this.dados.textos.adicionar);

        // valida se a badge de contagem está visível
        CarrinhoPage.seletoresCarrinho.badgeCarrinho().should('not.exist');
    });

    it('Carrinho - remover item direto na tela do carrinho', function() {
        // adiciona item ao carrinho, abre carrinho e remove item
        CarrinhoPage.adicionarMochila();
        CarrinhoPage.abrirCarrinho();
        CarrinhoPage.removerMochila();
        
        // valida se a badge de contagem está visível
        CarrinhoPage.seletoresCarrinho.badgeCarrinho().should('not.exist');
    });

    it('Carrinho - visualizar itens adicionados ao carrinho', function() {
        // adiciona item ao carrinho e abre carrinho
        CarrinhoPage.adicionarLuzBicicleta();
        CarrinhoPage.abrirCarrinho();
        
        // valida item adicionado ao carrinho pelo seu nome
        CarrinhoPage.seletoresCarrinho.nomeItemInventario()
            .should('have.text', this.dados.textos.nomeProdutoLuz);
    });

    it('Carrinho - realizar checkout', function() {
        // adiciona item ao carrinho, abre carrinho e inicia o checkout
        CarrinhoPage.adicionarLuzBicicleta();
        CarrinhoPage.abrirCarrinho();
        CarrinhoPage.iniciarCheckout();
        
        // preenche dados do checkout utilizando a fixture
        CarrinhoPage.preencherDadosCheckout(
            this.dados.checkout.nome,
            this.dados.checkout.sobrenome,
            this.dados.checkout.cep
        );
        
        // continua para a página de finalizar comprar e finaliza
        CarrinhoPage.continuarCheckout();
        CarrinhoPage.finalizarCompra();
        
        // valida mensagem de sucesso ao finalizar pedido
        CarrinhoPage.seletoresCarrinho.mensagemSucesso()
            .should('have.text', this.dados.textos.mensagemSucesso);
    });
});