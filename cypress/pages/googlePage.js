const BasePage = require('./basePage');
const { google } = require('../support/constants');

class GooglePage extends BasePage {
    constructor() {
        super();
    }

    elements = { //funciones de acceso a elementos de la pagina
        searchInput: () => cy.get(google.SEARCH_FIELD),
        resultSearchWiki: () => cy.get(google.SEARCH_RESULTS_WIKI)
    };

    visitGoogle() {
        cy.visit(google.URL_GOOGLE);
        cy.title().should('eq', "Google"); //comprueba estar en el sitio
        this.clickOn(google.BUTTON_ACCEPT_COOKIES);
    };

    searchFor(query) {
        this.elements.searchInput()
        .type(query)
        .type('{enter}');
    };


    selectWikipediaResult() {
        this.elements.resultSearchWiki()
        .filter(':visible') //filtra para seleccionar solo los visibles en la pagina
        .first()
        .click();
        
    };

    
}

module.exports = new GooglePage();