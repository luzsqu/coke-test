Cypress.Commands.add('getSelectors', function (container) {
    // Seleccionar el contenedor
    cy.get(container).then($container => {
        const container = $container[0];
        const elements = container.querySelectorAll('*');
        const uniqueSelectors = new Set();

        elements.forEach(el => {
            // Agregar ID
            if (el.id) {
                uniqueSelectors.add(`#${el.id}`);
            }

            // Agregar clases
            if (el.className) {
                el.classList.forEach(cls => uniqueSelectors.add(`.${cls}`));
            }

            // Agregar tagName
            const tagName = el.tagName.toLowerCase();
            uniqueSelectors.add(tagName);

            // Agregar data-membername
            const dataMemberName = el.getAttribute('data-membername');
            if (dataMemberName) {
                uniqueSelectors.add(`[data-membername="${dataMemberName}"]`)
            }

            // Agregar placeholder
            const placeholder = el.getAttribute('placeholder');
            if (placeholder) {
                uniqueSelectors.add([placeholder="${placeholder}"]);
            }
        });

        // Mostrar los selectores únicos en la consola de Cypress
        console.log([...uniqueSelectors].join('\n'));
    });
});

Cypress.Commands.add('getContainerText', (container) => {
    cy.get(container).each($container => {
        console.log('${$container.text().trim()}',)
    });
})