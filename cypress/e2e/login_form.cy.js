import HomePage_PO from "../support/pageObjects/bettingexpert/Homepage_PO";
import LoginPage_PO from "../support/pageObjects/bettingexpert/LoginPage_PO";
import "cypress-wait-until";
describe("Test  Login form via BettingExpert ", () => {
  const homepage_PO = new HomePage_PO();
  const loginPage_PO = new LoginPage_PO();
  before(function () {
    cy.fixture("loginUser").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    // cy.navigate_to_bettingExpert();
    // cy.handleCookiesPopup();

    homepage_PO.visitHomePage();
  });
  // it("Should be able to submit a successful message  via login us form", () => {
  //   //   // cy.get(".be-button__text > .ng-tns-c7-4").click();
  //   //   // cy.get('input[formcontrolname="username"]').type(data.username);
  //   //   // cy.get('input[type="password"][formcontrolname="password"]').type(
  //   //   //   data.password
  //   //   // );
  //   //   // cy.get("div.be-checkbox-wrap__right").contains("Remember me").click();
  //   //   // cy.get("span.ng-tns-c7-24").click({ multiple: true });

  //   //   // cy.contains("div.be-column", "vlaadiimiir").should("be.visible");

  //   loginPage_PO.login_with_real_user_name_and_password(
  //     data.username,
  //     data.password
  //   );
  // });

  it("Should be able to verify error message when try to log in with wrong user name", () => {
    loginPage_PO.login_with_wrong_user_name_and_correct_password(
      data.wrongusername,
      data.password
    );
  });
  // it("Should be able to verify successful message after request new password with correct user name ", () => {
  //   loginPage_PO.request_new_password_with_correct_user_name(data.username);
  // });
});
