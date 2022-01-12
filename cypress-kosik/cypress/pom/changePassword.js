export class changePassword {

    getTitle = () => {
        return cy.get('.text-10');
    };

    getEmailInput = () => {
        return cy.get('#frm-changePassword-email');
    };

    getOriginalPwdInput = () => {
        return cy.get('#frm-changePassword-originalPassword');
    };

    getNewPwdFirstInput = () => {
        return cy.get('#frm-changePassword-password');
    };

    getNewPwdSecondInput = () => {
        return cy.get('#frm-changePassword-passwordConfirm');
    };

    getSubmitButton = () => {
        return cy.get('.btn__rounded');
    };
}