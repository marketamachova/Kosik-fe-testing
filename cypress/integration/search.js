import { acceptAllCookies, openWebsite, testVisibility } from "../helpers";
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
  getListedProductsNames,
  getFirstRadioButton,
  getSubcategories,
  getCategoryButton,
  getSubcategoryButton,
  getPopupBox,
  getSearchingTitle,
  getSearchingMessage,
} from "../helpers/search";
import { getRandomFromInterval } from "../utils/random";

describe("Searching (parameterized)", () => {
  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
  });

  const doSearching = (input) => {
    getSearchInput().type(input);
    cy.wait(500);
    getSearchHintsModal().should("be.visible");
    getSearchButton().click();
  };

  it("Search for a non-existent product through search bar", () => {
    let name = "lorem ipsum dolor sit ametdksfjlsfdkj";
    doSearching(name);

    let searchingTitle = getSearchingTitle();
    testVisibility(searchingTitle);
    searchingTitle.should("have.text", `\n      Vyhledávání "${name}"\n    `);

    let noResultSearchingMessage = getSearchingMessage();
    testVisibility(noResultSearchingMessage);
    noResultSearchingMessage.should(
      "have.text",
      "Rozjeli jsme pátrání, ale hledané zboží buďto nemáme, nebo je vyprodané"
    );
  });

  it("Search a specific product through search bar", () => {
    doSearching("fresca paleta kokos");

    getFirstRadioButton().should("be.checked");
    getProductsListed().should("have.length", 1);
    getListedProductsNames().should("contain", "Fresca Paleta Kokos");
  });

  it("Search by categories", () => {
    cy.fixture("categories").then((cats) =>
      cats.forEach((cat) => {
        getCategoryButton(cat.category).click();
        getSubcategories().should("have.length", cat.numSubcategories);
        getSubcategoryButton(
          getRandomFromInterval(cat.numSubcategories)
        ).click();
        // getSearchingTitle().should('have.text', 'Vyhledávání')
      })
    );
  });

  it("Find ingredients through collective searching from list with duplicates (parameterized)", () => {
    getCollectiveSearchButton().click();

    getPopupBox().should("be.visible");
    cy.fixture("shopping-list-search-duplicates").then((items) => {
      items.forEach((item) => {
        getCollectiveSearchInput().type(`${item.name}, `);
      });

      getCollectiveSearchSubmitButton().click();
      getCollectiveSearchCategories().should("have.length", items.length / 2);
    });
  });

  it("Find ingredients through collective searching and delete categories one by one (parameterized)", () => {
    getCollectiveSearchButton().click();
    getPopupBox().should("be.visible");
    cy.fixture("shopping-list-search").then((items) => {
      items.forEach((item) => {
        getCollectiveSearchInput().type(`${item.name}, `);
      });

      getCollectiveSearchSubmitButton().click();
      getCollectiveSearchCategories().should("have.length", items.length);

      let index = 0;
      items.forEach((item) => {
        getCollectiveSearchCategories()
          .eq(index)
          .should("have.text", item.name);
        index++;
      });
    });

    for (let i = 0; i < length; i++) {
      getCollectiveSearchTags().should("have.length", length - i);
      getCollectiveSearchCategories().should("have.length", length - i);
      findFirstCollectiveSearchingTag().click();
    }
  });
});
