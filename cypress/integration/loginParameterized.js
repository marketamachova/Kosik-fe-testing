import {acceptAllCookies, openWebsite} from "../helpers";
import {getLoginButton, login, loginInvalid, logout} from "../helpers/login";

describe("Login parameterized", function () {
  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
  });
  //
  // after(() => {
  //   logout();
  // });

  it("Login parameterized", () => {
    cy.fixture("loginMccInvalid").then((inputs) =>
      inputs.forEach((inputCombination) => {
        loginInvalid(inputCombination.email, inputCombination.password, inputCombination.error);

        openWebsite();

      })
    );

    cy.fixture("loginMccValid").then((inputs) =>
      inputs.forEach((inputCombination) => {
        login(inputCombination.email, inputCombination.password);
      })
    );
  })
});
