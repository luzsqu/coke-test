const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //hola mundo 
    specPattern: 'cypress/e2e/**/*.js'
  },
});
