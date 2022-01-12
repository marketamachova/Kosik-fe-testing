import { login } from "../helpers/login";
import { openWebsite, acceptAllCookies } from "../helpers";
import { getFirstProduct } from "../helpers/cart";

describe("Shopping List", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);

    openWebsite();
    acceptAllCookies();
    login();
  });

  it("Create shopping list with 1 product", () => {
    const listName = Date.now();

    cy.get(".control-link > .name").click();

    cy.get(":nth-child(5) > .user-nav__link")
      .contains("Nákupní seznamy")
      .click();

    cy.get(".btn__rounded").contains("Vytvořit nový seznam").click();

    cy.get("input#frm-shoppingListForm-name").type(listName);
    cy.get(".btn__rounded").contains("Vytvořit").click();

    const banner = cy.get('div[data-v-5b2c41aa=""] > .status-bar');
    banner.should("contain.text", "Nákupní seznam byl upraven.");

    cy.get('a[href="/znacky?kampan=paticka"]').click();
    cy.get(".a-link-underline").first().click();

    getFirstProduct().first().get("h2").first().click();

    cy.get(".shopping-list-control > .control").click();
    cy.get(".mb-2 > .content").contains(listName).click();
    cy.get(".popup__close").click();

    cy.get(".control-link > .name").click();

    cy.get(":nth-child(5) > .user-nav__link").click();

    cy.get("a").contains(listName).click();

    cy.get(".shopping-list__remove").should("have.length", 1);

    cy.get(".section-title__mobile-toggle")
      .click({ force: true })
      .get(".section-title__delete")
      .click({ force: true });

    cy.get(".popup-small__btn").contains("Ano, přeji").click();

    cy.get("a").contains(listName).should("not.exist");
  });
});
