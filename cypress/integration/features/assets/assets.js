import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/";
const apiUrl = "http://localhost:3333/list";

Given('opening Assets Page', () => {
    cy.visit(url);
});

Then('title should be {string}', (title) => {
    cy.title().should('eq', title);
});

Given('table is displayed', () => {
    cy.get('table').contains('th', 'Ticker');
    cy.get('table').contains('th', 'Price');
    cy.get('table').contains('th', 'Asset Type');
});

Then ('should display assets list', () => {
    cy.intercept('GET', '/list', {fixture: 'list'}).as('assetsList');
});


When('{string} is clicked', (headerOption) => {
    cy.contains(headerOption).click();
});

When('{string} is clicked', (headerOption) => {
    cy.contains(headerOption).click();
});

When('{string} is clicked', (headerOption) => {
    cy.contains(headerOption).click();
});


Given('Asset is Equities', () => {
    cy.get('.equity-asset');
});
When('equities background-color should be {string}', (bgColor) => {
    cy.get('.equity-asset').should('have.css', 'background-color', bgColor);
});
Then('equities color should be {string}', (color) => {
    cy.get('.equity-asset').should('have.css', 'color', color);
})


Given('Asset is Macro', () => {
    cy.get('.macro-asset')
    .should('have.css', 'color', 'rgb(255, 255, 255)');
});
When('macro background-color should be {string}', (bgColor) => {
    cy.get('.macro-asset').should('have.css', 'background-color', bgColor)
});
Then('macro color should be {string}', (color) => {
    cy.get('.macro-asset').should('have.css', 'color', color);
})

Given('Asset is Credit', () => {
    cy.get('.credit-asset').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .should('have.css', 'color', 'rgb(0, 0, 0)');
});
When('credit background-color should be {string}', (bgColor) => {
    cy.get('.credit-asset').should('have.css', 'background-color', bgColor)
});
Then('credit color should be {string}', (color) => {
    cy.get('.credit-asset').should('have.css', 'color', color);
})







