
describe('Accessibility tests for the login page', () => {
  beforeEach(() => {
    cy.visit('https://b2b-bo.staging.embonorservices.cl/signin');  
    cy.injectAxe(); 
  });

  it('Debe pasar todas las pruebas de accesibilidad', () => {
    cy.checkA11y();
  });

  it('Debe pasar pruebas de accesibilidad solo en el formulario de login', () => {
    
    cy.checkA11y('form', {
      includedImpacts: ['critical']  
    });
  });

  it('Debe generar un informe de accesibilidad en un archivo', () => {
    
    cy.checkA11y(null, {}, (violations) => {
     
      if (violations.length > 0) {
        const report = violations.map((violation) => {
          return {
            id: violation.id,
            description: violation.description,
            impact: violation.impact,
            nodes: violation.nodes.map((node) => ({
              html: node.html,
              target: node.target,
              failureSummary: node.failureSummary,
            })),
          };
        });

       
        cy.writeFile ('cypress/reports/resultsFile.json', JSON.stringify(report, null, 2), 'utf-8');
      } else {
        cy.log('No accessibility violations found');
      }
    });
  });
});
