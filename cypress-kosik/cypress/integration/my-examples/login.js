import {acceptAllCookies, getLoginButton, openWebsite, testVisibility} from "../../helpers";
import {
    getLoginConfirmButton,
    getPasswordInput,
    getPopup,
    getUsernameInput,
    PASSWORD,
    USERNAME
} from "../../helpers/login";

export const login = () => {
    let loginButton = getLoginButton();
    testVisibility(loginButton);
    loginButton.click();

    testVisibility(getPopup());

    let usernameInput = getUsernameInput();
    testVisibility(usernameInput);
    usernameInput.type(USERNAME);

    let pwdInput = getPasswordInput();
    testVisibility(pwdInput);
    usernameInput.type(PASSWORD);

    let loginConfirmButton = getLoginConfirmButton();
    testVisibility(loginConfirmButton);
    loginConfirmButton.click();

    getPopup().should('not.exist');
};

describe('Log in', function () {

    beforeEach(() => {
        openWebsite();
        acceptAllCookies();
    });

    it('Log in', () => {
        login();
    });

    it('Log out using top-down menu', () => {
        login();


    })

    it('Log out through user profile', () => {
        login();


    })
});