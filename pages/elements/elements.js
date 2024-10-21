export default class Elements {

    pageView(){
        return cy.get ('#___gatsby');
    }
    textElements(){
        return cy.get ('form div h1');
    }
    textLogin (){
        return 'Inicia sesión para continuar'
    }
    inputEmail() {
        return cy.get('[placeholder*="correo"]');
    }
    inputPwd() {
        return cy.get('[placeholder*="contraseña"]');
    }
    SignInBtn(){
        return cy.get('[label*="ingresar"]');
    }
    recoverPwd(){
        return cy.get('a[href*="forgot"]');
    }
    logo(){
        return cy.get('img[class="logo"]');
    }
    activeAccount(){
        return cy.get ('[button*="activa"]')

    }
    helpBtn(){
        return cy.get ('')
    }

    verifyElementsVisible(){
        elements.textElements().should('be.visible');
        elements.textLogin().should('be.visible');
        elements.inputEmail().should('be.visible');
        elements.inputPwd().should('be.visible');
        elements.SignInBtn().should('be.visible');
        elements.recoverPwd().should('be.visible');
        elements.logo().should('be.visible');
        elements.activeAccount().should('be.visible');
        elements.helpBtn().should('be.visible');
        elements.textLogin().should('be.visible');
    }
}
