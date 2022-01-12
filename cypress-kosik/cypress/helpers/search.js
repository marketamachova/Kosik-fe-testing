import {getCartPreview, getShoppingCartButton} from "./cart";

export const doSearching = (input) => {
    getSearchInput().type(input);
    cy.wait(500);
    getSearchHintsModal().should('be.visible');
    getSearchButton().click();
    cy.wait(2000);
};

export const checkCartIsEmpty = () => {
    getShoppingCartButton().click();

    getCartPreview().should('be.visible');
    getCartPreview().should('contain', 'prázdný');
};

export const getSearchInput = () => {
    return cy.get('.product-search__input');
};

export const getSearchButton = () => {
    return cy.get('.product-search__submit');
};

export const getCollectiveSearchButton = () => {
    return cy.get('.multiple-search__link');
};

export const getCollectiveSearchInput = () => {
    return cy.get('label > .w-100');
};

export const getCollectiveSearchSubmitButton = () => {
    return cy.get('.align-self-center > .btn');
};

export const findFirstCollectiveSearchingTag = () => {
    return cy.get(':nth-child(3) > .remove-term__icon');
};

export const getCollectiveSearchTags = () => {
    return cy.get('.remove-term');
};

export const getCollectiveSearchCategories = () => {
    return cy.get('.pt-3');
};

export const getSearchHintsModal = () => {
    return cy.get('.product-search__container');
};

export const getProductsListed = () => {
    return cy.get('.product > .position-relative');
};

export const getListedProductsNames = () => {
    return cy.get('.content__info > a > .name');
};

export const getSubcategories = () => {
    return  cy.get('.nav-subcategory')
};

export const getFirstRadioButton = () => {
    return cy.get('.form-radio__label--checked > .form-radio__input')
};

export const getCategoryButton = (catNumber) => {
    return cy.get(`:nth-child(${catNumber}) > .nav-link`);
};

export const getSubcategoryButton = (subcatNumber) => {
    return cy.get(`:nth-child(${subcatNumber}) > .nav-subcategory`);
};

export const getPopupBox = () => {
    return cy.get('.popup__box');
};