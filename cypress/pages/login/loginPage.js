class LoginPage {
    visit() {
      cy.visit('https://b2b-bo.staging.embonorservices.cl/signin'); 
    }
  
    enterEmail(email) {
      cy.get('[placeholder*="correo"]').type(email);  
    }
  
    enterPassword(password) {
      cy.get('[placeholder*="contraseña"]').type(password); 
    }
  
    submit() {
      cy.get('[label*="ingresar"]').click();  
    }
  
    validateErrorMessage() {
      return cy.get('.error-message');  
    }
  
    validateSuccessfulLogin() {
      cy.url().should('include', '/app');  
    }

   
  }
  
  export default LoginPage;
  