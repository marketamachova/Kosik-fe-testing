export const Brand = "Značka";
export const Country = "Země původu";
export const Diet = "Diety &";
export const Alergens = "Alergeny";
export const Bread = "chleb";

export const getFilterCategoryButton = (filterName) => {
  return cy.contains(filterName);

};

export const getFilterCheckboxByName = (checkboxName) => {
  const checkbox = cy.contains(checkboxName);
  checkbox.should('exist');
  return checkbox;
  // checkbox.find('checkbox-input').should('exist');
  // return cy.find(':nth-child(1) > .toggle > .toggle-control > .toggle-control__label');
};
