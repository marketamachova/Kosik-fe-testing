import {
  acceptAllCookies,
  BaseUrl,
  getLoginButton,
  getNavDiv,
  getUrl,
  openWebsite,
  testVisibility,
} from "../helpers";
import {
  checkLogout,
  getLogoutButtonInNav,
  getLogoutButtonInUserProfile,
  login,
  logout,
} from "../helpers/login";

describe("Log in", function () {
  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
  });

  it("Log in", () => {
    login();
    logout();
  });

  it("Log out using top-down menu", () => {
    login();

    getLoginButton().trigger("mouseover");
    testVisibility(getNavDiv());

    let button = getLogoutButtonInNav();
    testVisibility(button);
    // button.should('be.enabled');
    button.click();

    checkLogout();
  });

  it("Log out through user profile", () => {
    login();

    getLoginButton().click();
    getUrl().should("eq", `${BaseUrl}muj-profil/order/default?locale=cs`);

    let logoutButton = getLogoutButtonInUserProfile();
    testVisibility(logoutButton);
    logoutButton.click();

    checkLogout();
  });
});
