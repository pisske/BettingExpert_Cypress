// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("navigate_to_bettingExpert", () => {
  cy.visit("/");
});
Cypress.Commands.add("handleCookiesPopup", () => {
  cy.get(".cookies-popup").should("be.visible");

  cy.get(".accept-cookies-button").click();
});
Cypress.Commands.add(
  "Login_with real user name and password",
  (username, password) => {
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[type="password"][formcontrolname="password"]').type(password);
  }
);
Cypress.Commands.add("Login_with wrong user name", (username, password) => {
  cy.get('input[formcontrolname="username"]').type(username);
  cy.get('input[type="password"][formcontrolname="password"]').type(password);
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
