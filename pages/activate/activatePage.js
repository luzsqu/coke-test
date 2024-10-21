class ActivatePage {
    visit() {
      cy.visit('https://b2b-bo.staging.embonorservices.cl/signin'); 
    }

   activeYourAccount (){
    cy.get ('[button*="activa"]').click();
   } 
   title(){
    cy.get('')
   }
   //revisarseector
   textDescription(){
    cy.get ('')
    //revisar selector
   }
   activate (){
    cy.get('[name="storeId"]').type();
   }
   activateButton(){
    cy.get('[label*="continuar"]').click();
   }
   searchId(){
    cy.get('a[href*="activate"]').click()
   }
   goBackSearchIdBtn(){
    cy.get('[label*="volver"]')
   }
   navigateGoBack(){
    cy.get('#arrow_left').click()
   }
}

   export default ActivatePage;

   