class LoginPage {
    // seletores utilizados nos testes
    seletoresLogin = {
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
        this.seletoresLogin.campoUsuario().type(usuario);
    }

    preencherSenha(senha) {
        this.seletoresLogin.campoSenha().type(senha);
    }

    submeter() {
        this.seletoresLogin.botaoLogin().click();
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
        this.seletoresLogin.botaoMenuLateral().click();
        this.seletoresLogin.botaoLogout().click();
    }
}

export default new LoginPage();