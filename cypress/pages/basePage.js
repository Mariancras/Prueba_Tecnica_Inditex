class BasePage {

    //método global para clickear un elemento
    clickOn(button) {
        cy.get(button)
            .should('be.visible')
            .click()
    }


    // volver a la url de inicio 
    visitHome() {
        cy.visit('/');
    }

    //comprueba la url actual
    checkUrl(urlToCompare) {
            cy.url().should('eq', urlToCompare);
    }
}

export default BasePage;
