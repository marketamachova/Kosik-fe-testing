import {acceptAllCookies, openWebsite} from "../helpers";
import {login, logout} from "../helpers/login";
import {doSearching, getCategoryButton, getSubcategories, getSubcategoryButton} from "../helpers/search";
import {getRandomFromInterval} from "../utils/random";
import {
  Alergens,
  Brand,
  Bread,
  Country,
  Diet,
  getFilterCategoryButton,
  getFilterCheckboxByName
} from "../helpers/filter";

Cypress.config('redirectLimit', 40);


describe("Filters", function () {
  beforeEach(() => {
    openWebsite();
    acceptAllCookies();
    doSearching(Bread);
  });

  it("Filters pairwise", () => {
    cy.fixture("filters").then((filters) =>
      filters.forEach((filterCombo) => {
        getFilterCategoryButton(Brand).click(); //open
        getFilterCheckboxByName(filterCombo.Brand).click();
        getFilterCategoryButton(Brand).click(); //close

        getFilterCategoryButton(Country).click(); //open
        getFilterCheckboxByName(filterCombo.Country).click();
        getFilterCategoryButton(Country).click(); //open

        getFilterCategoryButton(Diet).click(); //open
        getFilterCheckboxByName(filterCombo.Country).click();
        getFilterCategoryButton(Diet).click(); //open

        getFilterCategoryButton(Alergens).click(); //open
        getFilterCheckboxByName(filterCombo.Alergens).click();
        getFilterCategoryButton(Alergens).click(); //open

        openWebsite();
        doSearching(Bread);
      })
    );
  });
});
