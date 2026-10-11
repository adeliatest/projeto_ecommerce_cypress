class LoginPage {
    // seletores utilizados nos testes
    seletores = {
        campoUsuario: () => cy.get('[data-test="username"]'),
        campoSenha: () => cy.get('[data-test="password"]'),
        botaoLogin: () => cy.get('[data-test="login-button"]'),
        mensagemErro: () => cy.get('[data-test="error"]'),
        
        // pós-login e logout
        tituloPagina: () => cy.get('[data-test="title"]'),
        botaoMenuLateral: () => cy.get('#react-burger-menu-btn'),
        botaoLogout: () => cy.get('[data-test="logout-sidebar-link"]')
    }

    // acesso
    acessarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    // login
    preencherUsuario(usuario) {
        this.seletores.campoUsuario().type(usuario);
    }

    preencherSenha(senha) {
        this.seletores.campoSenha().type(senha);
    }

    submeter() {
        this.seletores.botaoLogin().click();
    }

    // campos em branco
    realizarLogin(usuario, senha) {
        if (usuario) {
            this.preencherUsuario(usuario);
        }
        if (senha) {
            this.preencherSenha(senha);
        }
        this.submeter();
    }

    // logout
    realizarLogout() {
        this.seletores.botaoMenuLateral().click();
        this.seletores.botaoLogout().click();
    }
}

export default new LoginPage();