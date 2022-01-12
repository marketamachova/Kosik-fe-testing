import { acceptAllCookies, openWebsite } from "../helpers";
import { checkCartIsEmpty, doSearching } from "../helpers/search";
import {
  addProductToCartLoggedIn,
  getDecreaseButton,
  getIncreaseButton,
  getProductAmountInput,
  getRemoveProdFromCartButton,
  removeAllProductsFromCart,
} from "../helpers/cart";
import { login } from "../helpers/login";

describe("Cart remove", function () {
  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
    login();
    doSearching("zmrzlina");
  });

  it("Increase and decrease product amount in cart", () => {
    addProductToCartLoggedIn();
    cy.wait(500);

    getProductAmountInput().then((input) => {
      expect(input.val()).to.contain("1");
    });

    getIncreaseButton().click();

    getProductAmountInput().then((input) => {
      expect(input.val()).to.contain("2");
    });

    getDecreaseButton().click();

    getProductAmountInput().then((input) => {
      expect(input.val()).to.contain("1");
    });

    removeAllProductsFromCart();
    cy.log("hey");
  });

  it("Remove product from cart", () => {
    addProductToCartLoggedIn();

    getProductAmountInput().then((input) => {
      expect(input.val()).to.exist;
      expect(input.val()).to.eq("1");
    });

    let firstRemoveProdButton = getRemoveProdFromCartButton().first();
    firstRemoveProdButton.should("exist");
    firstRemoveProdButton.should("be.visible");
    firstRemoveProdButton.click();

    checkCartIsEmpty();
  });
});
