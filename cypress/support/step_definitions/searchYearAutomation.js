import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import GooglePage from '../../pages/googlePage.js';
import WikiPage from '../../pages/wikiPage.js';

import data from '../../fixtures/data.json';

//Scenario 1

Given('I searched on Google for the word "automatización"', () => {
    GooglePage.visitGoogle();
    GooglePage.searchFor(data.wordSearch);
});

When('I click on the Wikipedia result', () => {
    GooglePage.selectWikipediaResult();
});

Then('it should redirect me to the wikipedia automation result', () => {
    GooglePage.checkUrl(data.wikipedia.urlAutomation);
});

//Scenario 2

Given('I am in the wikipedia automation result', () => {
    cy.visit(data.wikipedia.urlAutomation)
    /*no se utiliza una funcion (por ejemplo visitWiki()) para que sea más 
    fácil el seguimiento entre escenarios*/
});

When('I look for the year in which the first automatic process was carried out', () => {
    WikiPage.compareYearOfParagraphWhitKeywords(data.wikipedia.keywords, data.wikipedia.yearOfFirstAutomation);
});

Then('it should show me the year in which the first automation was carried out', () => {
    WikiPage.getScreenshotOfParagraphWhitKeywords(data.wikipedia.keywords)
})

