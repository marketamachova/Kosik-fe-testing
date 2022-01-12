export const BaseUrl = 'https://www.kosik.cz/';


export const openWebsite = () => {
    return cy.visit("https://www.kosik.cz");
};

export const acceptAllCookies = () => {
    cy.get('.btn--neutral-light').click();
};


export const getLoyaltyClubButton = () => {
    return cy.get('[href="/stranky/vernostni-kluby?kampan=hp_top"]');
};

export const getLoginButton = () => {
    return cy.get('.control-link > .name');
};


export const getPopup = () => {
    return cy.get('.popup__box')
};

export const getModalBackdrop = () => {
    return cy.get('div.popup__wrap-align');
};

export const getPopupCloseButton = () => {
    return cy.get('button.popup__close');
};

export const testVisibility = (element) => {
    element.should('exist');
    element.should('be.visible');
};

export const getNavDiv = () => {
    return cy.get('.user-nav');
};

export const getStatusBar = () => {
    return cy.get('.status-bar');
};

export const getStatusBarText = () => {
    return cy.get('.status-bar__text');
};

export const getUrl = () => {
    return cy.url();
};



