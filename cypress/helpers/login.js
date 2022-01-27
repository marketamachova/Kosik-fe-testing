import {getStatusBar, getStatusBarText, testVisibility} from "./index";

export const USERNAME = 'kosik.tester@gmail.com';
export const PASSWORD = 'kosikZKS';

export const login = (username = USERNAME, password = PASSWORD) => {
  typeCredentials(username, password);

  getPopup().should('not.exist');
};

export const loginInvalid = (username, password, errorMessage) => {
  typeCredentials(username, password);

  getPopup().should('exist');
  cy.get('.a-flash').should('exist');
  cy.contains(errorMessage).should('exist');
};


export const logout = () => {
  getLoginButton().trigger('mouseover');
  cy.wait(500);

  let button = getLogoutButtonInNav();
  button.first().click(); //TODO mozna blbe first
};

export const checkLogout = () => {
  getLoginButton().should('have.text', "Přihlásit se");
  cy.wait(500);
  testVisibility(getStatusBar());

  let statusBarText = getStatusBarText();
  testVisibility(statusBarText);
  // statusBarText.should('have.text', 'Byl jste odhlášen');

};

const typeCredentials = (username, password) => {
  let loginButton = getLoginButton();
  testVisibility(loginButton);
  loginButton.click();

  testVisibility(getPopup());

  let usernameInput = getUsernameInput();
  testVisibility(usernameInput);
  usernameInput.type(username);

  let pwdInput = getPasswordInput();
  testVisibility(pwdInput);
  usernameInput.type(password);

  let loginConfirmButton = getLoginConfirmButton();
  testVisibility(loginConfirmButton);
  loginConfirmButton.click();
};

export const getLoginButton = () => {
  return cy.get('.control-link > .name');
};

export const getPopup = () => {
  return cy.get('.popup__box');
};

export const getUsernameInput = () => {
  return cy.get('#frm-signInForm-username');
};


export const getPasswordInput = () => {
  return cy.get('#frm-signInForm-password');
};


export const getLoginConfirmButton = () => {
  return cy.get('#frm-signInForm > .btn__rounded');
};

export const getLogoutButtonInNav = () => {
  return cy.get('.user-nav > :nth-child(10)');
};

export const getLogoutButtonInUserProfile = () => {
  return cy.get(':nth-child(10) > .user-nav__link');
};

