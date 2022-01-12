import {acceptAllCookies, openWebsite} from "../../helpers";
import {
    checkCartIsEmpty, doSearching
} from "../../helpers/search";
import {
    addProductToCartLoggedIn,
    ADDRESS,
    getAddressInput,
    getAddressPopup,
    getFirstAddressHint,
    getFirstProduct, getItemInCartName, removeAllProductsFromCart,
} from "../../helpers/cart";
import {login, logout} from "../../helpers/login";

describe('Cart add', function () {

    beforeEach(() => {
        openWebsite();
        acceptAllCookies();
    });

    it('Check cart is empty', () => {
        checkCartIsEmpty();
    });

    it('Logged out: Add an ice-cream to cart and check cart content', () => {
        doSearching("zmrzlina");
        getFirstProduct().first().find(".content__info h2.name").then(h2 => {
            getFirstProduct().first().find("button").click();

            getAddressPopup().should('be.visible');

            let addressInput = getAddressInput();
            addressInput.should('be.visible');
            addressInput.type(ADDRESS);

            let addressHint = getFirstAddressHint().should('be.visible');
            addressHint.click();
            getItemInCartName().should("contain", h2.text());
        });

        removeAllProductsFromCart();
    });

    it('Logged in: Add an ice-cream to cart and check cart content', () => {
        login();
        doSearching("zmrzlina");
        addProductToCartLoggedIn();

        removeAllProductsFromCart();
        logout();
    });
});


