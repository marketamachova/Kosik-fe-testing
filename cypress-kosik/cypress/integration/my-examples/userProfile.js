import {getLoginButton, login, logout} from "../../helpers/login";
import {openWebsite, acceptAllCookies, testVisibility, getUrl} from "../../helpers";
import {userProfile} from "../../pom/userProfile";

describe("User profile", () => {
    const testUrl = (button, url) => {
        testVisibility(button);
        button.click();

        getUrl().should('eq', url);
    };

    const openUserProfile = () => {
        getLoginButton().click();
    };


    beforeEach(() => {
        cy.viewport(1000, 660);

        openWebsite();
        acceptAllCookies();
        login();
        openUserProfile();
    });

    afterEach(() => {
        logout();
    });

    it("Open my orders", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getMyOrdersButton(), profilePage.OrderUrl);
    });

    it("Open my addresses", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getAddressesButton(), profilePage.AddressesUrl);
    });

    it("Open favorite products", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getFavouriteProductButton(), profilePage.FavouriteProductUrl);
    });

    it("Open my credits", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getMyCreditsButton(), profilePage.MyCreditsUrl);
    });

    it("Open cards", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getMyCreditCardsButton(), profilePage.MyCreditCardsUrl);
    });

    it("Open mobile app", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getMobileAppButton(), profilePage.MobileAppUrl);
    });

    it("Open newsletters", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getNewslettersButton(), profilePage.NewslettersUrl);
    });

    it("Open change password", () => {
        const profilePage = new userProfile();

        testUrl(profilePage.getChangePwdButton(), profilePage.ChangePwdUrl);
    });
});