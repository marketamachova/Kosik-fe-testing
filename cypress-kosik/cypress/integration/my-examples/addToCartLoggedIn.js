import {acceptAllCookies, openWebsite} from "../../helpers";
import {
    getSearchButton,
    getSearchHintsModal,
    getSearchInput,
} from "../../helpers/search";
import {
    ADDRESS,
    getAddressInput,
    getAddressPopup,
    getCartPreview, getDecreaseButton,
    getFirstAddressHint,
    getFirstProduct, getIncreaseButton, getItemInCartName,
    getProductAmountInput,
    getShoppingCartButton,
    getProductPriceInCart, getRemoveProdFromCartButton
} from "../../helpers/cart";
import {login} from "./login";


describe('Cart logged in', function () {

    const doSearching = (input) => {
        getSearchInput().type(input);
        cy.wait(500);
        getSearchHintsModal().should('be.visible');
        getSearchButton().click();
        cy.wait(2000);
    };

    const addProductToCartLoggedIn = () => {
        logIn(); //TODO
        getFirstProduct().first().find(".content__info h2.name").then(h2 => {
            getFirstProduct().first().find("button").click();

            getItemInCartName().should("contain", h2.text());
        })
    };

    const checkCartIsEmpty = () => {
        getShoppingCartButton().click();

        getCartPreview().should('be.visible');
        getCartPreview().should('contain', 'prázdný');
    };


    beforeEach(() => {
        openWebsite();
        acceptAllCookies();
        login();
        doSearching("zmrzlina");
    });

    it('Check cart is empty', () => {
        checkCartIsEmpty();
    });

    it('Add an ice-cream to cart and check cart content', () => {
        addProductToCartLoggedIn();
    });

    it('Increase and decrease product amount in cart', () => {
        addProductToCartLoggedIn();
        cy.wait(500);

        getProductAmountInput().then(input => {
            expect(input.val()).to.contain("1");
        });

        getIncreaseButton().click();

        getProductAmountInput().then(input => {
            expect(input.val()).to.contain("2");
        });

        getDecreaseButton().click();

        getProductAmountInput().then(input => {
            expect(input.val()).to.contain("1");
        })
    });

    it.only('Remove product from cart', () => {
        addProductToCartLoggedIn();
        cy.wait(500);

        getProductAmountInput().then(input => {
            expect(input.val()).to.exist;
            expect(input.val()).to.eq("1");
        });

        let firstRemoveProdButton = getRemoveProdFromCartButton().first();
        firstRemoveProdButton.should('exist');
        firstRemoveProdButton.should('be.visible');
        firstRemoveProdButton.click();

        checkCartIsEmpty();
    });
});

