import {testVisibility} from "./index";

export const ADDRESS = 'Novovysočanská 695/42, 19000 Praha 9 - Vysočany';

export const addProductToCartLoggedIn = () => {
    getFirstProduct().first().find(".content__info h2.name").then(h2 => {
        getFirstProduct().find("button").first().click();

        let item = getItemInCartName();
        testVisibility(item);
        item.should("contain", h2.text());
    })
};

export const removeAllProductsFromCart = () => {
    let button = getAllCloseButtonsInCart();
    if (button) {
        button.click()
    }
};


export const getShoppingCartButton = () => {
    return cy.get('.link-my-cart');
};

export const getFirstProduct = () => {
    return cy.get('.content');
};

export const getAddToCartButton = () => {
    return cy.get('.amount > .tooltip-wrapper > .product-amount > .product-amount__add')
};

export const getCartPreview = () => {
    return cy.get('div.cart-preview__content');
};

export const getAddressPopup = () => {
    return cy.get('.address-selector');
};

export const getAddressInput = () => {
    return cy.get('.address-selector__input-component input');
};

export const getFirstAddressHint = () => {
    return cy.get('.address-suggestion-item:first-child')
};

export const getItemInCartName = () => {
    return cy.get('.product-row__name');
};

export const getIncreaseButton = () => {
    return cy.get('.d-inline-flex > .tooltip-wrapper > .product-amount > .product-amount__btn--increase')
};

export const getDecreaseButton = () => {
    return cy.get('.d-inline-flex > .tooltip-wrapper > .product-amount > .product-amount__btn--decrease')
};

export const getProductAmountInput = () => {
    return cy.get('.d-inline-flex > .tooltip-wrapper > .product-amount > .product-amount__input')
};

export const getProductPriceInCart = () => {
    return cy.get('.product-row__summary > .text-4')
};

export const getRemoveProdFromCartButton = () => {
    return cy.get('.product-row__control-close');
};

export const getAllCloseButtonsInCart = () => {
    return cy.get('.product-row__control-close');
};

