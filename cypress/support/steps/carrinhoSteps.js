import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CarrinhoPage from '../pages/carrinhoPage';
import LoginPage from '../pages/loginPage';
import { faker } from '@faker-js/faker';

// O passo "Dado que eu acesso a pagina de login" é global e já é executado pelo loginSteps.js

Given('faco login com o usuario {string} e senha {string}', (usuario, senha) => {
    LoginPage.realizarLogin(usuario, senha);
});

// --- AÇÕES DE ADICIONAR (GIVEN / WHEN) ---
When('eu adiciono a mochila ao carrinho', () => {
    CarrinhoPage.adicionarMochila();
});

Given('que adicionei a mochila ao carrinho', () => {
    CarrinhoPage.adicionarMochila();
});

When('eu adiciono a luz de bicicleta ao carrinho', () => {
    CarrinhoPage.adicionarLuzBicicleta();
});

Given('que adicionei a luz de bicicleta ao carrinho', () => {
    CarrinhoPage.adicionarLuzBicicleta();
});

// --- AÇÕES DE REMOVER (WHEN) ---
When('eu removo a mochila da pagina inicial', () => {
    CarrinhoPage.removerMochila();
});

When('eu acesso o carrinho e removo a mochila', () => {
    CarrinhoPage.abrirCarrinho();
    CarrinhoPage.removerMochila();
});

// --- NAVEGAÇÃO E CHECKOUT (WHEN) ---
When('acesso a pagina do carrinho', () => {
    CarrinhoPage.abrirCarrinho();
});

When('eu inicio o checkout', () => {
    CarrinhoPage.iniciarCheckout();
});

When('preencho os dados de entrega com informacao dinamica', () => {
    const nomeDinamico = faker.person.firstName();
    const sobrenomeDinamico = faker.person.lastName();
    const cepDinamico = faker.location.zipCode();
    
    CarrinhoPage.preencherDadosCheckout(nomeDinamico, sobrenomeDinamico, cepDinamico);
    CarrinhoPage.continuarCheckout();
});

When('finalizo a compra', () => {
    CarrinhoPage.finalizarCompra();
});

// --- VALIDAÇÕES (THEN) ---
Then('o botao da mochila deve mudar para {string}', (textoEsperado) => {
    if (textoEsperado === 'Remove') {
        CarrinhoPage.seletoresCarrinho.botaoRemoverMochila().should('be.visible').and('have.text', textoEsperado);
    } else {
        CarrinhoPage.seletoresCarrinho.botaoAdicionarMochila().should('be.visible').and('have.text', textoEsperado);
    }
});

Then('o contador do carrinho deve exibir {string}', (quantidadeEsperada) => {
    CarrinhoPage.seletoresCarrinho.badgeCarrinho().should('be.visible').and('have.text', quantidadeEsperada);
});

Then('o contador do carrinho deve desaparecer', () => {
    CarrinhoPage.seletoresCarrinho.badgeCarrinho().should('not.exist');
});

Then('devo ver o item {string} na lista', (nomeProduto) => {
    CarrinhoPage.seletoresCarrinho.nomeItemInventario().should('have.text', nomeProduto);
});

Then('devo ver a mensagem de sucesso {string}', (mensagem) => {
    CarrinhoPage.seletoresCarrinho.mensagemSucesso().should('have.text', mensagem);
});