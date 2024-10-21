class RecoveryPass{

  recoveryPassword(){
    cy.get ('[button*="Olvidaste"]').click();
   }  
   title(){
    cy.get ('div', 'Recuperar contraseña');
   }
   linkApp(){
    cy.get ('#download').click();
   }
   EmailRecovery(){
    cy.get ('[placeholder*="minombre@empresa.bo"]')
   }
   recoveryButton(){
    cy.get('[label*="Continuar"]').click();
   }
   navigateGoBack(){
    cy.get('#arrow_left').click()
   }



//lo go
//tittle
//descripciones
}
