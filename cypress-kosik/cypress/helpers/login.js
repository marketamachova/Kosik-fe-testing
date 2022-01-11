export const USERNAME = 'kosik.tester@gmail.com';
export const PASSWORD = 'kosikZKS';

export const getLoginButton = () => {
    return cy.get('.control-link > .name')
}


export const getPopup = () => {
    return cy.get('.popup__box')
}


export const getUsernameInput = () => {
    return cy.get('#frm-signInForm-username')
}


export const getPasswordInput    = () => {
    return cy.get('#frm-signInForm-password')
}



export const getLoginConfirmButton   = () => {
    return cy.get('#frm-signInForm > .btn__rounded')
}
