export class userProfile {

    OrderUrl = 'https://www.kosik.cz/muj-profil/order/default?locale=cs';
    AddressesUrl = 'https://www.kosik.cz/muj-profil/profile/address?locale=cs';
    FavouriteProductUrl = 'https://www.kosik.cz/oblibene';
    MyCreditsUrl = 'https://www.kosik.cz/muj-profil/profile/credit-history?locale=cs';
    MyCreditCardsUrl = 'https://www.kosik.cz/platebni-karty';
    MobileAppUrl = 'https://www.kosik.cz/stranky/aplikace';
    NewslettersUrl = 'https://www.kosik.cz/muj-profil/profile/newsletter-list?locale=cs';
    ChangePwdUrl = 'https://www.kosik.cz/muj-profil/profile/change-password?locale=cs';

    getUserCardEmail = () => {
        return cy.get('.user-card__email');
    };

    getMyOrdersButton = () => {
        return cy.get('.user-nav__link--active');
    }

    getAddressesButton = () => {
        return cy.get(':nth-child(2) > .user-nav__link');
    }

    getFavouriteProductButton = () => {
        return cy.get(':nth-child(3) > .user-nav__link');
    }

    getMyCreditsButton = () => {
        return cy.get(':nth-child(4) > .user-nav__link');
    }


    getMyCreditCardsButton = () => {
        return cy.get(':nth-child(6) > .user-nav__link')
    }

    getMobileAppButton = () => {
        return cy.get(':nth-child(7) > .user-nav__link')
    }

    getNewslettersButton = () => {
        return cy.get(':nth-child(8) > .user-nav__link')
    }

    getChangePwdButton = () => {
        return cy.get(':nth-child(9) > .user-nav__link')
    }
}