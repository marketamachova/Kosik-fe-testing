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
import {async} from "rxjs";


describe('Cart logged out', function () {

    const doSearching = (input) => {
        getSearchInput().type(input);
        cy.wait(500);
        getSearchHintsModal().should('be.visible');
        getSearchButton().click();
        cy.wait(2000);
    };


    const addProductToCartLoggedOut = () => {
        getFirstProduct().first().find(".content__info h2.name").then(h2 => {
            getFirstProduct().first().find("button").click();

            getAddressPopup().should('be.visible');

            let addressInput = getAddressInput();
            addressInput.should('be.visible');
            addressInput.type(ADDRESS);

            let addressHint = getFirstAddressHint().should('be.visible');
            addressHint.click();
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
        doSearching("zmrzlina");
    });

    it('Check cart is empty', () => {
        checkCartIsEmpty();
    });

    it('Add an ice-cream to cart and check cart content', () => {
        addProductToCartLoggedOut();
    });

    it('Increase and decrease product amount in cart', () => {
        addProductToCartLoggedOut();
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
        addProductToCartLoggedOut();
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

