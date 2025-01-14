const { defineConfig } = require("cypress");

module.exports = defineConfig({

  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/support/step_definitions',

  },
  
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "**/*.{feature,features}", /*   "** /" indica que se busque en todos los directorios del proyecto 
    - "*.{feature,features}" indica la búsqueda de cualquier archivo con la extension feature o features  */

    excludeSpecPattern: ["*.js", "*.ts", "*.md", "*.json"], //Se excluyen los archivos con estas extensiones

    baseUrl: "https://www.google.com/",
    chromeWebSecurity: false, // es conveniente deshabilitarlo por si nuestro test ejecuta apis externas al sitio testeado
    viewportWidth: 1920,
    viewportHeight: 1080,
    //testIsolation: false, //el aislamiento de prueba funciona en True por defecto 
  },
});


