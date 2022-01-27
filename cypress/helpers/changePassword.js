export const getOriginalPasswordInput = () => {
  return cy.get('#frm-changePassword-originalPassword')
};

export const getNewPasswordInput = () => {
  return cy.get('#frm-changePassword-password')
};

export const getNewPasswordAgainInput = () => {
  return cy.get('#frm-changePassword-passwordConfirm')
};

export const getSubmitButton = () => {
  return cy.get('.btn__rounded')
};
