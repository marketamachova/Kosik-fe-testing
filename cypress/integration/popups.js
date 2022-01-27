import {
  acceptAllCookies,
  getLoginButton,
  getModalBackdrop,
  getPopup,
  getPopupCloseButton,
  openWebsite,
  testVisibility,
} from "../helpers";

describe("Popups", function () {
  const openLoginModal = () => {
    getLoginButton().click();

    testVisibility(getPopup());
  };

  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
  });

  it("Open Login modal", () => {
    openLoginModal();
  });

  it("Close login modal with button", () => {
    openLoginModal();

    let button = getPopupCloseButton();
    testVisibility(button);

    button.click();

    getModalBackdrop().should("not.exist");
    getPopup().should("not.exist");
  });

  it("Close login modal with clicking outside", () => {
    openLoginModal();

    let backdrop = getModalBackdrop();
    testVisibility(backdrop);

    backdrop.click('topLeft');
    backdrop.should("not.exist");
    getPopup().should("not.exist");
  });
});
