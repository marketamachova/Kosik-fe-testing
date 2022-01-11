import {acceptAllCookies, openWebsite} from "../../helpers";
import {
    getSearchInput,
    getSearchHintsModal,
    getSearchButton,
    getProductsListed,
    getCollectiveSearchButton,
    getCollectiveSearchInput,
    getCollectiveSearchSubmitButton,
    getCollectiveSearchCategories,
    getCollectiveSearchTags,
    findFirstCollectiveSearchingTag,
    getListedProductsNames, getFirstRadioButton, getSubcategories, getCategoryButton, getSubcategoryButton, getPopupBox
} from "../../helpers/search";


describe('Searching', () => { //TODO can make parameterized
    beforeEach(() => {
        openWebsite();
        acceptAllCookies();
    });

    const doSearching = (input) => {
            getSearchInput().type(input);
            cy.wait(500);
            getSearchHintsModal().should('be.visible');
            getSearchButton().click();
    };


    it('Find an ice-cream through search bar', () => {
        doSearching('Nanuk');

        getFirstRadioButton().should('be.checked')
        getSubcategories().should('have.length', 6);
    });

    it('Find a specific product through search bar', () => {
        doSearching('fresca paleta kokos')

        getProductsListed().should('have.length', 1);
        getListedProductsNames().should('contain', 'Fresca Paleta Kokos');
    });

    it('Find a nanuk by categories', () => {
        getCategoryButton(6).click();
        getSubcategories().should('have.length', 11);
        getSubcategoryButton(2).click();
    });

    it('Find ingredients through collective searching and delete categories one by one', () => {
        getCollectiveSearchButton().click();
        getPopupBox().should('be.visible');
        getCollectiveSearchInput().type("mléko, mouka, rohlík");
        getCollectiveSearchSubmitButton().click();

        let length = 3;
        getCollectiveSearchCategories().should(($cat) => {
            expect($cat).to.have.length(length);
            expect($cat.eq(0)).to.contain('mléko');
            expect($cat.eq(1)).to.contain('mouka');
            expect($cat.eq(2)).to.contain('rohlík');
        });

        for (let i = 0; i < length; i++) {
            getCollectiveSearchTags().should('have.length', length - i);
            getCollectiveSearchCategories().should('have.length', length - i);
            findFirstCollectiveSearchingTag().click();
        }
    });
});

