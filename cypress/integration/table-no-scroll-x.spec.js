/// <reference types="cypress" />

describe("Table without scroll-x", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/no-scroll-x");
  });

  it("should show table", () => {
    cy.get("h1").contains("Table test");
    cy.get("table").should("exist");
  });
});
