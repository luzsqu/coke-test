import ActivatePage from '../../pages/activate/activatePage';
import LoginPage from '../../pages/login/loginPage';
import Elements from '../../pages/elements/elements';

describe('Login Test Suite', () => {
  const loginPage = new LoginPage();
  const activatePage = new ActivatePage();
  const elements =new Elements();

it ('Debe mostrar los elementos de la pantalla de login'), () => {
  elements.textElements(); 
  
}

  it('Debe mostrar un error cuando las credenciales son incorrectas', () => {
    cy.log (cy.getSelectors("form.max-w-full"))
    loginPage.visit();
    loginPage.enterEmail('luz.squarzon@applydigital.com');
    loginPage.enterPassword('1234567');
    loginPage.submit();
    loginPage.validateErrorMessage().should('be.visible').and('contain', 'Credenciales incorrectas');
  });

  it('Debe hacer login correctamente con credenciales válidas', () => {
    loginPage.visit();
    loginPage.enterEmail('luz.squarzon+bo1@applydigital.com');
    loginPage.enterPassword('Embonor_21');
    loginPage.submit();
    loginPage.validateSuccessfulLogin();
  });

  it ('Debe redirigir a Activa tu Cuenta'), () => {
    activatePage.visit();
    activatePage.activeYourAccount();
    activatePage.activate('1234567');
    activatePage.activateButton();
    activatePage.searchId();
    activatePage.navigateGoBack();
}

  it('Debe verificar que todos los elementos clave son visibles', () => {
      elements.verifyElementsVisible();

      
});

//validar imagenes de fono done
//validar elementos de pantalla done
//recuperar contraseña en curso
//activa tu cuenta - done
//buscar tu codigoid 
//centro de ayuda 
//validar ojito 
//validar navegacion go back desde centro de ayuda 

})
