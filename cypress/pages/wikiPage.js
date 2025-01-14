const BasePage = require('./basePage');

class WikiPage extends BasePage {
    constructor() {
        super();
    }

    //Método que busca los párrafos que contengan todas las palabras/frases de la lista
    searchInParagraph(listOfWords) { 
        return cy.get('p').filter((index, element) => {

            const text = Cypress.$(element).text(); //obtiene el texto del párrafo

            return listOfWords.every(keyword => text.includes(keyword)); //verifica si todas las palabras/frases están eb el párrafo

        }).first(); //retorna el primer parrafo que cumple con el criterio
    }

    // Método para verificar que el parrafo que contiene estas palabras debe contener este año
    compareYearOfParagraphWhitKeywords(listOfWords, year){
        this.searchInParagraph(listOfWords).should('contain', year);
        
};

    // Método para obtener una captura de pantalla del primer párrafo que contiene las palabras clave.
    getScreenshotOfParagraphWhitKeywords(listOfWords){
        this.searchInParagraph(listOfWords).scrollIntoView(); // obtiene el párrafo y se posiciona sobre él
        this.screenshot()
    }

    screenshot () {
        cy.screenshot('screenshot-wiki-first-automation',{capture : 'viewport'})
    }

}

module.exports = new WikiPage();