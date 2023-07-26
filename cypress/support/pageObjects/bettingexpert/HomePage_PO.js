class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("home_page"));
  }
}

export default HomePage_PO;
