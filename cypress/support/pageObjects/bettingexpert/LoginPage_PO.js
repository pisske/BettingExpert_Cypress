class LoginPage_PO {
  login_with_real_user_name_and_password(username, password) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get('.be-form > [type="text"]').type(username);
    cy.get('[type="password"]').type(password);
    cy.get('[footer=""] > :nth-child(1) > be-button.be-typo-uppercase').click({
      multiple: true,
    });
    // cy.contains("div.be-column", "vlaadiimiir").should("be.visible");
  }

  login_with_wrong_user_name_and_correct_password(username, password) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[type="password"][formcontrolname="password"]').type(password);
    cy.get("span.ng-tns-c7-24").click({ multiple: true });
    cy.contains("div.be-form__alert", "Invalid user").should("be.visible");
  }
  login_with_correct_user_name_and_wrong_password(username, password) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[type="password"][formcontrolname="password"]').type(password);
    cy.get("span.ng-tns-c7-24").click({ multiple: true });
  }
  login_with__user_name_with_less_than_two_character(username, password) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[type="password"][formcontrolname="password"]').type(password);
    cy.get("span.ng-tns-c7-24").click({ multiple: true });
  }
  login_with__password_with_less_than_two_character(username, password) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[type="password"][formcontrolname="password"]').type(password);
    cy.get("span.ng-tns-c7-24").click({ multiple: true });
  }
  request_new_password_with_correct_user_name(username) {
    cy.get(".be-button__text > .ng-tns-c7-4").click();
    cy.get(
      "a.be-typo-link.be-typo-link--internal.be-typo-strong.ng-star-inserted"
    )
      .as("btn")
      .click({ multiple: true });
    cy.get("@btn").click({ multiple: true });
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get("span.ng-tns-c7-31").click({ multiple: true });
    cy.get("h2.be-modal-base__header__title").contains(
      "Request password change link"
    );
  }
}

export default LoginPage_PO;
